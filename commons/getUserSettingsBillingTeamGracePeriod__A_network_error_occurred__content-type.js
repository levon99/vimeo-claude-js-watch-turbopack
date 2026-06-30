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
  async function _v10({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v8.measureLatency)("getUserSettingsBillingTeamGracePeriod", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/settings/billing/team_grace_period?fields=${_v1.map(_v9.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v9.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v9.deepCamelCase)(_v1);
    });
  }
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v14.useGctlConfig)();
    return (0, _v11.default)(_v2 ? `/users/${_v2.where.userId}/settings/billing/team_grace_period${(0, _v13.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v10({
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
  "true" === _v7.default.env.STORYBOOK && (0, _v13.assignMswData)(_v15, {
    endpoint: "/users/:userId/settings/billing/team_grace_period",
    method: "GET"
  }), "true" === _v7.default.env.STORYBOOK && (0, _v13.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v14.useGctlConfig)(),
      [_v5, _v6] = (0, _v13.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/settings/billing/team_grace_period${(0, _v13.serializeQuery)(_v0)}`, _v10({
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
    endpoint: "/users/:userId/settings/billing/team_grace_period",
    method: "GET"
  });
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
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
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = {
      amex: _v36.AmexNegative,
      discover: _v37.DiscoverNegative,
      mastercard: _v38.MastercardNegative,
      paypal: _v39.PaypalNegative,
      visa: _v40.VisaNegative
    },
    _v43 = ({
      cardBrand: _v0
    }) => {
      let _v1 = _v42[_v0.toLowerCase().replace(/[^a-z]/g, "")] || _v35.CreditCard;
      return (0, _v1.jsx)(_v23.Center, {
        minW: "32px",
        h: "24px",
        color: "text-primary",
        children: (0, _v1.jsx)(_v1, {
          width: "32px",
          height: "20px"
        })
      });
    },
    _v44 = ({
      title: _v0,
      description: _v1
    }) => (0, _v1.jsxs)(_v25.HStack, {
      gap: "8px",
      align: "flex-start",
      children: [(0, _v1.jsx)(_v32.Text, {
        color: "status-destructive-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsxs)(_v32.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: [(0, _v1.jsx)(_v32.Text, {
          as: "span",
          variant: "heading-xs",
          color: "text-primary",
          children: _v0
        }), " ", _v1]
      })]
    }),
    _v45 = ({
      layout: _v0,
      analytics: _v1,
      isOpen: _v2,
      onClose: _v3,
      daysRemaining: _v4,
      suspensionDate: _v5,
      lastFourDigits: _v6,
      cardBrand: _v7,
      amountDue: _v8,
      teamMemberCount: _v9 = 1,
      storageQuotaLabel: _v10,
      videoTitle: _v11,
      dismissible: _v12 = !0,
      returnUrl: _v13,
      phase: _v14 = "grace"
    }) => {
      let _v15 = (0, _v2.useRef)(!1),
        _v16 = "suspended" === _v14,
        _v17 = (0, _v20.buildGracePeriodCheckoutHref)({
          routeThroughDunning: !0,
          returnUrl: _v13
        });
      (0, _v2.useEffect)(() => {
        _v2 && !_v15.current && _v1.trackModalDisplayed({
          variant: "admin",
          daysRemaining: _v4
        }), _v15.current = _v2;
      }, [_v1, _v4, _v2]);
      let _v18 = (0, _v2.useCallback)(() => {
          _v1.trackModalDismissed({
            variant: "admin",
            daysRemaining: _v4
          }), _v3();
        }, [_v1, _v4, _v3]),
        _v19 = (0, _v2.useCallback)(() => {
          _v1.trackModalCtaClicked({
            variant: "admin",
            daysRemaining: _v4
          });
        }, [_v1, _v4]);
      return _v2 ? (0, _v1.jsxs)(_v26.Modal, {
        isOpen: !0,
        onClose: _v18,
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        size: ["full", "md"],
        scrollBehavior: "inside",
        children: [(0, _v1.jsx)(_v31.ModalOverlay, {}), (0, _v1.jsxs)(_v29.ModalContent, {
          containerProps: {
            padding: {
              base: "0 !important"
            }
          },
          maxWidth: {
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
            md: "90vh"
          },
          borderRadius: {
            base: "0",
            md: "20px"
          },
          margin: {
            base: "0",
            md: "auto"
          },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          children: [(0, _v1.jsxs)(_v24.Flex, {
            px: "24px",
            pt: "24px",
            pb: "8px",
            alignItems: "flex-start",
            gap: "10px",
            flexShrink: 0,
            children: [(0, _v1.jsxs)(_v21.Box, {
              flex: "1",
              children: [(0, _v1.jsx)(_v32.Text, {
                variant: "heading-md",
                children: _v16 ? (0, _v41.translate)({
                  singular: "Some of your videos may be restricted",
                  dictionary: {
                    es: {
                      singular: "Algunos de tus videos pueden estar restringidos"
                    },
                    "de-DE": {
                      singular: "Einige Ihrer Videos sind möglicherweise eingeschränkt"
                    },
                    "fr-FR": {
                      singular: "Certaines de vos vidéos peuvent être restreintes"
                    },
                    "ja-JP": {
                      singular: "一部の動画が制限されている可能性があります"
                    },
                    "ko-KR": {
                      singular: "일부 동영상의 접근이 제한될 수 있습니다"
                    },
                    "pt-BR": {
                      singular: "Alguns dos seus vídeos podem estar restritos"
                    },
                    "zh-CN": {
                      singular: "您的一些视频可能会被限制访问"
                    }
                  }
                }) : (0, _v41.translate)({
                  singular: "Your subscription is about to expire",
                  dictionary: {
                    es: {
                      singular: "Su suscripción está a punto de expirar"
                    },
                    "de-DE": {
                      singular: "Ihr Abonnement läuft bald ab"
                    },
                    "fr-FR": {
                      singular: "Votre abonnement arrive bientôt à expiration"
                    },
                    "ja-JP": {
                      singular: "サブスクリプションの有効期限がまもなく切れます"
                    },
                    "ko-KR": {
                      singular: "구독이 곧 만료됩니다"
                    },
                    "pt-BR": {
                      singular: "Sua assinatura está prestes a expirar"
                    },
                    "zh-CN": {
                      singular: "您的订阅即将到期"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v32.Text, {
                variant: "body-md",
                color: "text-secondary",
                mt: "4px",
                children: (0, _v41.translate)({
                  singular: "We've been unable to process your payment.",
                  dictionary: {
                    es: {
                      singular: "No hemos podido procesar su pago."
                    },
                    "de-DE": {
                      singular: "Wir konnten Ihre Zahlung nicht verarbeiten."
                    },
                    "fr-FR": {
                      singular: "Nous n'avons pas pu traiter votre paiement."
                    },
                    "ja-JP": {
                      singular: "お支払いの処理ができませんでした。"
                    },
                    "ko-KR": {
                      singular: "결제 처리에 실패했습니다."
                    },
                    "pt-BR": {
                      singular: "Não conseguimos processar seu pagamento."
                    },
                    "zh-CN": {
                      singular: "我们无法处理您的付款。"
                    }
                  }
                })
              })]
            }), _v12 && (0, _v1.jsx)(_v28.ModalCloseButton, {
              position: "static"
            })]
          }), (0, _v1.jsx)(_v27.ModalBody, {
            px: "24px",
            pt: "20px",
            pb: "8px",
            flex: "1 1 auto",
            overflowY: "auto",
            children: (0, _v1.jsxs)(_v33.VStack, {
              gap: "24px",
              align: "stretch",
              children: [_v16 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v25.HStack, {
                  gap: "10px",
                  px: "16px",
                  py: "12px",
                  bg: "status-destructive-secondary",
                  borderRadius: "12px",
                  children: [(0, _v1.jsx)(_v34.CircleExclamationFilled, {
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    color: "status-destructive-primary"
                  }), (0, _v1.jsxs)(_v21.Box, {
                    flex: "1",
                    minW: 0,
                    children: [(0, _v1.jsx)(_v32.Text, {
                      variant: "heading-sm",
                      color: "text-primary",
                      children: (0, _v41.translate)({
                        singular: "Your subscription is expired",
                        dictionary: {
                          es: {
                            singular: "Tu suscripción ha expirado"
                          },
                          "de-DE": {
                            singular: "Ihr Abonnement ist abgelaufen"
                          },
                          "fr-FR": {
                            singular: "Votre abonnement a expiré"
                          },
                          "ja-JP": {
                            singular: "サブスクリプションが期限切れです"
                          },
                          "ko-KR": {
                            singular: "구독이 만료되었습니다"
                          },
                          "pt-BR": {
                            singular: "Sua assinatura expirou"
                          },
                          "zh-CN": {
                            singular: "您的订阅已过期"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v32.Text, {
                      variant: "body-sm",
                      color: "text-secondary",
                      mt: "2px",
                      children: (0, _v41.translate)({
                        singular: "We'll keep retrying your payment until {DATE}.",
                        replacements: {
                          DATE: _v5
                        },
                        dictionary: {
                          es: {
                            singular: "Seguiremos reintentando tu pago hasta {DATE}."
                          },
                          "de-DE": {
                            singular: "Wir werden bis zum {DATE} weiterhin versuchen, Ihre Zahlung zu verarbeiten."
                          },
                          "fr-FR": {
                            singular: "Nous continuerons à tenter de débiter votre paiement jusqu'au {DATE}."
                          },
                          "ja-JP": {
                            singular: "支払いは{DATE}まで再試行し続けます。"
                          },
                          "ko-KR": {
                            singular: "결제 시도를 {DATE}까지 계속합니다."
                          },
                          "pt-BR": {
                            singular: "Continuaremos a tentar processar seu pagamento até {DATE}."
                          },
                          "zh-CN": {
                            singular: "我们会持续尝试处理您的付款，直到 {DATE}."
                          }
                        }
                      })
                    })]
                  })]
                }), (0, _v1.jsxs)(_v33.VStack, {
                  gap: "8px",
                  align: "stretch",
                  children: [(0, _v1.jsx)(_v32.Text, {
                    variant: "heading-xs",
                    color: "text-primary",
                    mb: "8px",
                    children: (0, _v41.translate)({
                      singular: "Renew now to recover access to:",
                      dictionary: {
                        es: {
                          singular: "Renueva ahora para recuperar el acceso a:"
                        },
                        "de-DE": {
                          singular: "Jetzt erneuern, um den Zugriff auf Folgendes wiederherzustellen:"
                        },
                        "fr-FR": {
                          singular: "Renouvelez maintenant pour récupérer l'accès à\x0f:"
                        },
                        "ja-JP": {
                          singular: "アクセスを回復するには今すぐ更新してください:"
                        },
                        "ko-KR": {
                          singular: "지금 갱신하여 다음 항목에 대한 접근을 복구하세요:"
                        },
                        "pt-BR": {
                          singular: "Renove agora para recuperar acesso a:"
                        },
                        "zh-CN": {
                          singular: "立即续订以恢复对以下内容的访问:"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v44, {
                    title: (0, _v41.translate)({
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
                    description: (0, _v41.translate)({
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
                  }), (0, _v1.jsx)(_v44, {
                    title: (0, _v41.translate)({
                      singular: "Access to your storage",
                      dictionary: {
                        es: {
                          singular: "Acceso a su almacenamiento"
                        },
                        "de-DE": {
                          singular: "Zugriff auf Ihren Speicher"
                        },
                        "fr-FR": {
                          singular: "Accès à votre stockage"
                        },
                        "ja-JP": {
                          singular: "ストレージへのアクセス"
                        },
                        "ko-KR": {
                          singular: "저장소 액세스"
                        },
                        "pt-BR": {
                          singular: "Acesso ao seu armazenamento"
                        },
                        "zh-CN": {
                          singular: "访问您的存储空间"
                        }
                      }
                    }),
                    description: (0, _v41.translate)({
                      singular: "currently in use",
                      dictionary: {
                        es: {
                          singular: "actualmente en uso"
                        },
                        "de-DE": {
                          singular: "derzeit in Verwendung"
                        },
                        "fr-FR": {
                          singular: "actuellement utilisé"
                        },
                        "ja-JP": {
                          singular: "現在使用中"
                        },
                        "ko-KR": {
                          singular: "현재 사용 중"
                        },
                        "pt-BR": {
                          singular: "atualmente em uso"
                        },
                        "zh-CN": {
                          singular: "当前正在使用"
                        }
                      }
                    })
                  }), _v9 > 1 && (0, _v1.jsx)(_v44, {
                    title: (0, _v41.translate)({
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
                    description: (0, _v41.translate)({
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
              }) : "home" === _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v25.HStack, {
                  gap: "10px",
                  px: "16px",
                  py: "12px",
                  bg: "status-caution-secondary",
                  borderRadius: "12px",
                  children: [(0, _v1.jsx)(_v34.CircleExclamationFilled, {
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    color: "status-caution-primary"
                  }), (0, _v1.jsxs)(_v21.Box, {
                    flex: "1",
                    minW: 0,
                    children: [(0, _v1.jsx)(_v32.Text, {
                      variant: "heading-sm",
                      color: "orange.700",
                      children: (0, _v41.translate)({
                        singular: "{DAYS} day until your account is suspended",
                        plural: "{DAYS} days until your account is suspended",
                        count: _v4,
                        replacements: {
                          DAYS: _v4
                        },
                        dictionary: {
                          es: {
                            singular: "{DAYS} día hasta que su cuenta sea suspendida",
                            plural: "{DAYS} días hasta que su cuenta sea suspendida"
                          },
                          "de-DE": {
                            singular: "{DAYS} Tag bis zur Sperrung Ihres Kontos",
                            plural: "{DAYS} Tage bis zur Sperrung Ihres Kontos"
                          },
                          "fr-FR": {
                            singular: "{DAYS} jour avant la suspension de votre compte",
                            plural: "{DAYS} jours avant la suspension de votre compte"
                          },
                          "ja-JP": {
                            singular: "アカウントが停止されるまであと{DAYS}日です",
                            plural: "アカウントが停止されるまであと{DAYS}日です"
                          },
                          "ko-KR": {
                            singular: "계정 정지까지 {DAYS}일 남았습니다",
                            plural: "계정 정지까지 {DAYS}일 남았습니다"
                          },
                          "pt-BR": {
                            singular: "Falta {DAYS} dia até que sua conta seja suspensa",
                            plural: "Faltam {DAYS} dias até que sua conta seja suspensa"
                          },
                          "zh-CN": {
                            singular: "{DAYS} 天后您的账户将被暂停",
                            plural: "{DAYS} 天后您的账户将被暂停"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v32.Text, {
                      variant: "body-sm",
                      color: "status-caution-primary",
                      mt: "2px",
                      children: (0, _v41.translate)({
                        singular: "Suspends {DATE}",
                        replacements: {
                          DATE: _v5
                        },
                        dictionary: {
                          es: {
                            singular: "Suspende {DATE}"
                          },
                          "de-DE": {
                            singular: "Wird am {DATE} gesperrt"
                          },
                          "fr-FR": {
                            singular: "Suspend le {DATE}"
                          },
                          "ja-JP": {
                            singular: "停止日：{DATE}"
                          },
                          "ko-KR": {
                            singular: "{DATE}에 정지됩니다"
                          },
                          "pt-BR": {
                            singular: "Suspende em {DATE}"
                          },
                          "zh-CN": {
                            singular: "将于 {DATE} 暂停"
                          }
                        }
                      })
                    })]
                  })]
                }), (0, _v1.jsxs)(_v33.VStack, {
                  gap: "8px",
                  align: "stretch",
                  children: [(0, _v1.jsx)(_v32.Text, {
                    variant: "heading-xs",
                    color: "text-primary",
                    mb: "8px",
                    children: (0, _v41.translate)({
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
                  }), (0, _v1.jsx)(_v44, {
                    title: (0, _v41.translate)({
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
                    description: (0, _v41.translate)({
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
                  }), (0, _v1.jsx)(_v44, {
                    title: _v10 ? (0, _v41.translate)({
                      singular: "Access to {STORAGE} of storage",
                      replacements: {
                        STORAGE: _v10
                      },
                      dictionary: {
                        es: {
                          singular: "Acceso a {STORAGE} de almacenamiento"
                        },
                        "de-DE": {
                          singular: "Zugriff auf {STORAGE} Speicherplatz"
                        },
                        "fr-FR": {
                          singular: "Accès à {STORAGE} d'espace de stockage"
                        },
                        "ja-JP": {
                          singular: "{STORAGE} のストレージへのアクセス"
                        },
                        "ko-KR": {
                          singular: "{STORAGE}의 저장 공간 이용 가능"
                        },
                        "pt-BR": {
                          singular: "Acesso a {STORAGE} de armazenamento"
                        },
                        "zh-CN": {
                          singular: "可使用 {STORAGE} 的存储空间"
                        }
                      }
                    }) : (0, _v41.translate)({
                      singular: "Access to your storage",
                      dictionary: {
                        es: {
                          singular: "Acceso a su almacenamiento"
                        },
                        "de-DE": {
                          singular: "Zugriff auf Ihren Speicher"
                        },
                        "fr-FR": {
                          singular: "Accès à votre stockage"
                        },
                        "ja-JP": {
                          singular: "ストレージへのアクセス"
                        },
                        "ko-KR": {
                          singular: "저장소 액세스"
                        },
                        "pt-BR": {
                          singular: "Acesso ao seu armazenamento"
                        },
                        "zh-CN": {
                          singular: "访问您的存储空间"
                        }
                      }
                    }),
                    description: (0, _v41.translate)({
                      singular: "currently in use",
                      dictionary: {
                        es: {
                          singular: "actualmente en uso"
                        },
                        "de-DE": {
                          singular: "derzeit in Verwendung"
                        },
                        "fr-FR": {
                          singular: "actuellement utilisé"
                        },
                        "ja-JP": {
                          singular: "現在使用中"
                        },
                        "ko-KR": {
                          singular: "현재 사용 중"
                        },
                        "pt-BR": {
                          singular: "atualmente em uso"
                        },
                        "zh-CN": {
                          singular: "当前正在使用"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v44, {
                    title: (0, _v41.translate)({
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
                    description: (0, _v41.translate)({
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
              }) : (0, _v1.jsxs)(_v25.HStack, {
                gap: "10px",
                px: "16px",
                py: "12px",
                bg: "status-caution-secondary",
                borderRadius: "12px",
                children: [(0, _v1.jsx)(_v34.CircleExclamationFilled, {
                  flexShrink: 0,
                  width: "24px",
                  height: "24px",
                  color: "status-caution-primary"
                }), (0, _v1.jsx)(_v21.Box, {
                  flex: "1",
                  minW: 0,
                  children: (0, _v1.jsx)(_v32.Text, {
                    variant: "body-md",
                    color: "orange.700",
                    children: (0, _v41.translate)({
                      singular: "“{TITLE}” goes offline in {DAYS} day. Update payment to keep it playing.",
                      plural: "“{TITLE}” goes offline in {DAYS} days. Update payment to keep it playing.",
                      count: _v4,
                      replacements: {
                        DAYS: _v4,
                        TITLE: _v11 ?? ""
                      },
                      dictionary: {
                        es: {
                          singular: "“{TITLE}” quedará sin conexión en {DAYS} día. Actualice el pago para que siga reproduciéndose.",
                          plural: "“{TITLE}” quedará sin conexión en {DAYS} días. Actualice el pago para que siga reproduciéndose."
                        },
                        "de-DE": {
                          singular: "“{TITLE}” geht in {DAYS} Tag offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird.",
                          plural: "“{TITLE}” geht in {DAYS} Tagen offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird."
                        },
                        "fr-FR": {
                          singular: "“{TITLE}” sera hors ligne dans {DAYS} jour. Mettez à jour le paiement pour qu'il continue à être lu.",
                          plural: "“{TITLE}” sera hors ligne dans {DAYS} jours. Mettez à jour le paiement pour qu'il continue à être lu."
                        },
                        "ja-JP": {
                          singular: "“{TITLE}”は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。",
                          plural: "“{TITLE}”は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。"
                        },
                        "ko-KR": {
                          singular: "“{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요.",
                          plural: "“{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요."
                        },
                        "pt-BR": {
                          singular: "“{TITLE}” ficará offline em {DAYS} dia. Atualize o pagamento para que continue sendo reproduzido.",
                          plural: "“{TITLE}” ficará offline em {DAYS} dias. Atualize o pagamento para que continue sendo reproduzido."
                        },
                        "zh-CN": {
                          singular: "“{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。",
                          plural: "“{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。"
                        }
                      }
                    })
                  })
                })]
              }), (0, _v1.jsxs)(_v25.HStack, {
                justifyContent: "space-between",
                px: "12px",
                py: "10px",
                bg: "fill-component",
                borderRadius: "8px",
                children: [(0, _v1.jsxs)(_v25.HStack, {
                  gap: "8px",
                  children: [(0, _v1.jsx)(_v43, {
                    cardBrand: _v7
                  }), (0, _v1.jsxs)(_v32.Text, {
                    variant: "body-md",
                    color: "text-tertiary",
                    children: [_v7, " ••••", _v6]
                  })]
                }), (0, _v1.jsxs)(_v25.HStack, {
                  gap: "8px",
                  children: [(0, _v1.jsx)(_v32.Text, {
                    variant: "body-md",
                    color: "text-tertiary",
                    children: _v8
                  }), (0, _v1.jsx)(_v23.Center, {
                    bg: "status-destructive-primary",
                    px: "6px",
                    py: "2px",
                    borderRadius: "4px",
                    children: (0, _v1.jsx)(_v32.Text, {
                      fontSize: "11px",
                      fontWeight: "500",
                      color: "text-button-inverted",
                      whiteSpace: "nowrap",
                      children: (0, _v41.translate)({
                        singular: "Payment failed",
                        dictionary: {
                          es: {
                            singular: "Pago fallido"
                          },
                          "de-DE": {
                            singular: "Zahlung fehlgeschlagen"
                          },
                          "fr-FR": {
                            singular: "Échec du paiement"
                          },
                          "ja-JP": {
                            singular: "支払いに失敗しました"
                          },
                          "ko-KR": {
                            singular: "결제 실패"
                          },
                          "pt-BR": {
                            singular: "Falha no pagamento"
                          },
                          "zh-CN": {
                            singular: "付款失败"
                          }
                        }
                      })
                    })
                  })]
                })]
              })]
            })
          }), (0, _v1.jsx)(_v30.ModalFooter, {
            px: "24px",
            pt: "20px",
            pb: "24px",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v22.Button, {
              as: "a",
              href: _v17,
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v19,
              children: _v16 ? (0, _v41.translate)({
                singular: "Update payment method",
                dictionary: {
                  es: {
                    singular: "Actualizar método de pago"
                  },
                  "de-DE": {
                    singular: "Zahlungsmethode aktualisieren"
                  },
                  "fr-FR": {
                    singular: "Mettre à jour le mode de paiement"
                  },
                  "ja-JP": {
                    singular: "お支払い方法を更新"
                  },
                  "ko-KR": {
                    singular: "결제 수단 업데이트"
                  },
                  "pt-BR": {
                    singular: "Atualizar método de pagamento"
                  },
                  "zh-CN": {
                    singular: "更新付款方式"
                  }
                }
              }) : (0, _v41.translate)({
                singular: "Update payment method now",
                dictionary: {
                  es: {
                    singular: "Actualice el método de pago ahora"
                  },
                  "de-DE": {
                    singular: "Zahlungsmethode jetzt aktualisieren"
                  },
                  "fr-FR": {
                    singular: "Mettre à jour le moyen de paiement maintenant"
                  },
                  "ja-JP": {
                    singular: "支払い方法を今すぐ更新"
                  },
                  "ko-KR": {
                    singular: "지금 결제 수단 업데이트"
                  },
                  "pt-BR": {
                    singular: "Atualize o método de pagamento agora"
                  },
                  "zh-CN": {
                    singular: "立即更新付款方式"
                  }
                }
              })
            })
          })]
        })]
      }) : null;
    };
  var _v46 = _v0.i(0);
  let _v47 = ({
      analytics: _v0,
      variant: _v1,
      playerWidth: _v2,
      onMemberLearnMore: _v3,
      routeThroughDunning: _v4 = !1,
      returnUrl: _v5
    }) => {
      let _v6 = "admin" === _v1,
        _v7 = (0, _v2.useRef)(!1),
        _v8 = (0, _v20.buildGracePeriodCheckoutHref)({
          routeThroughDunning: _v4,
          returnUrl: _v5
        });
      (0, _v2.useEffect)(() => {
        _v7.current || (_v0.trackBannerDisplayed({
          variant: _v1,
          daysRemaining: 0
        }), _v7.current = !0);
      }, [_v0, _v1]);
      let _v9 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v1,
            daysRemaining: 0
          });
        }, [_v0, _v1]),
        _v10 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v1,
            daysRemaining: 0
          }), _v3();
        }, [_v0, _v3, _v1]);
      return (0, _v1.jsxs)(_v24.Flex, {
        align: ["flex-start", "center"],
        justify: "space-between",
        direction: ["column", "row"],
        gap: "md",
        px: "16px",
        py: "12px",
        mb: void 0 !== _v2 ? "md" : void 0,
        width: "100%",
        maxWidth: void 0 !== _v2 ? (0, _v46.rem)(_v2) : void 0,
        borderRadius: "12px",
        bg: "status-destructive-secondary",
        children: [(0, _v1.jsxs)(_v25.HStack, {
          gap: "10px",
          flex: "1",
          minW: 0,
          children: [(0, _v1.jsx)(_v34.CircleExclamationFilled, {
            flexShrink: 0,
            width: "20px",
            height: "20px",
            color: "status-destructive-primary"
          }), (0, _v1.jsx)(_v32.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: _v6 ? (0, _v41.translate)({
              singular: "We have not been able to process your payment, so your videos over the Free plan limits will be restricted or set to private.",
              dictionary: {
                es: {
                  singular: "No hemos podido procesar su pago, por lo que los vídeos que excedan los límites del plan Free serán restringidos o se establecerán como privados."
                },
                "de-DE": {
                  singular: "Wir konnten Ihre Zahlung nicht verarbeiten, daher werden Ihre Videos, die über die Grenzen des Free-Plans hinausgehen, eingeschränkt oder auf privat gesetzt."
                },
                "fr-FR": {
                  singular: "Nous n'avons pas pu traiter votre paiement, vos vidéos dépassant les limites du plan Free seront restreintes ou définies comme privées."
                },
                "ja-JP": {
                  singular: "お支払いの処理ができなかったため、無料プランの上限を超える動画は制限されるか非公開に設定されます。"
                },
                "ko-KR": {
                  singular: "결제 처리를 진행할 수 없어 무료 플랜 한도를 초과한 동영상은 제한되거나 비공개로 설정됩니다."
                },
                "pt-BR": {
                  singular: "Não conseguimos processar seu pagamento, portanto seus vídeos que ultrapassam os limites do plano gratuito serão restringidos ou definidos como privados."
                },
                "zh-CN": {
                  singular: "我们无法处理您的付款，因此超出免费计划限制的视频将被限制访问或设置为私有。"
                }
              }
            }) : (0, _v41.translate)({
              singular: "Some of your team's videos are restricted while the account owner's payment is resolved.",
              dictionary: {
                es: {
                  singular: "Algunos videos de tu equipo están restringidos mientras se resuelve el pago del titular de la cuenta."
                },
                "de-DE": {
                  singular: "Einige Videos Ihres Teams sind eingeschränkt, bis die Zahlung des Kontoinhabers geklärt ist."
                },
                "fr-FR": {
                  singular: "Certaines vidéos de votre équipe sont restreintes tant que le paiement du propriétaire du compte n'est pas réglé."
                },
                "ja-JP": {
                  singular: "アカウント所有者の支払いが解決されるまで、チームの一部の動画へのアクセスが制限されます。"
                },
                "ko-KR": {
                  singular: "계정 소유자의 결제가 해결되는 동안 팀의 일부 동영상에 접근이 제한됩니다."
                },
                "pt-BR": {
                  singular: "Alguns vídeos da sua equipe estão restritos enquanto o pagamento do proprietário da conta não for resolvido."
                },
                "zh-CN": {
                  singular: "在帐户所有者的付款问题解决期间，您团队中的一些视频将被限制访问。"
                }
              }
            })
          })]
        }), _v6 ? (0, _v1.jsx)(_v22.Button, {
          as: "a",
          href: _v8,
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v9,
          children: (0, _v41.translate)({
            singular: "Update payment method",
            dictionary: {
              es: {
                singular: "Actualizar método de pago"
              },
              "de-DE": {
                singular: "Zahlungsmethode aktualisieren"
              },
              "fr-FR": {
                singular: "Mettre à jour le mode de paiement"
              },
              "ja-JP": {
                singular: "お支払い方法を更新"
              },
              "ko-KR": {
                singular: "결제 수단 업데이트"
              },
              "pt-BR": {
                singular: "Atualizar método de pagamento"
              },
              "zh-CN": {
                singular: "更新付款方式"
              }
            }
          })
        }) : (0, _v1.jsx)(_v22.Button, {
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v10,
          children: (0, _v41.translate)({
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
        })]
      });
    },
    _v48 = ({
      analytics: _v0,
      daysRemaining: _v1,
      variant: _v2,
      onAction: _v3,
      routeThroughDunning: _v4 = !1,
      returnUrl: _v5
    }) => {
      let _v6 = "admin" === _v2,
        _v7 = (0, _v20.buildGracePeriodCheckoutHref)({
          routeThroughDunning: _v4,
          returnUrl: _v5
        }),
        _v8 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        _v8.current || (_v0.trackBannerDisplayed({
          variant: _v2,
          daysRemaining: _v1
        }), _v8.current = !0);
      }, [_v0, _v1, _v2]);
      let _v9 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v2,
            daysRemaining: _v1
          });
        }, [_v0, _v1, _v2]),
        _v10 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v2,
            daysRemaining: _v1
          }), _v3();
        }, [_v0, _v1, _v3, _v2]);
      return (0, _v1.jsxs)(_v24.Flex, {
        align: ["flex-start", "center"],
        justify: "space-between",
        direction: ["column", "row"],
        gap: "md",
        px: "16px",
        py: "12px",
        borderRadius: "12px",
        bg: "status-caution-secondary",
        children: [(0, _v1.jsxs)(_v25.HStack, {
          gap: "10px",
          flex: "1",
          minW: 0,
          children: [(0, _v1.jsx)(_v34.CircleExclamationFilled, {
            flexShrink: 0,
            width: "20px",
            height: "20px",
            color: "status-caution-primary"
          }), (0, _v1.jsx)(_v32.Text, {
            variant: "body-md",
            fontWeight: "500",
            color: "orange.700",
            children: _v6 ? (0, _v41.translate)({
              singular: "Your payment failed — {DAYS} day left to update before your account is suspended",
              plural: "Your payment failed — {DAYS} days left to update before your account is suspended",
              count: _v1,
              replacements: {
                DAYS: _v1
              },
              dictionary: {
                es: {
                  singular: "Su pago falló — queda {DAYS} día para actualizar antes de que su cuenta sea suspendida",
                  plural: "Su pago falló — quedan {DAYS} días para actualizar antes de que su cuenta sea suspendida"
                },
                "de-DE": {
                  singular: "Ihre Zahlung ist fehlgeschlagen — Sie haben noch {DAYS} Tag, um die Zahlung zu aktualisieren, bevor Ihr Konto gesperrt wird",
                  plural: "Ihre Zahlung ist fehlgeschlagen — Sie haben noch {DAYS} Tage, um die Zahlung zu aktualisieren, bevor Ihr Konto gesperrt wird"
                },
                "fr-FR": {
                  singular: "Votre paiement a échoué — il vous reste {DAYS} jour pour effectuer la mise à jour avant la suspension de votre compte",
                  plural: "Votre paiement a échoué — il vous reste {DAYS} jours pour effectuer la mise à jour avant la suspension de votre compte"
                },
                "ja-JP": {
                  singular: "お支払いに失敗しました — アカウントが停止される前に更新する猶予は{DAYS}日です",
                  plural: "お支払いに失敗しました — アカウントが停止される前に更新する猶予は{DAYS}日です"
                },
                "ko-KR": {
                  singular: "결제 실패 — 계정 정지까지 {DAYS}일 남았습니다. 결제 정보를 업데이트해 주세요.",
                  plural: "결제 실패 — 계정 정지까지 {DAYS}일 남았습니다. 결제 정보를 업데이트해 주세요."
                },
                "pt-BR": {
                  singular: "Seu pagamento falhou — falta {DAYS} dia para atualizar antes que sua conta seja suspensa",
                  plural: "Seu pagamento falhou — faltam {DAYS} dias para atualizar antes que sua conta seja suspensa"
                },
                "zh-CN": {
                  singular: "您的付款失败 — 在账户被暂停之前，您还有 {DAYS} 天的时间来更新",
                  plural: "您的付款失败 — 在账户被暂停之前，您还有 {DAYS} 天的时间来更新"
                }
              }
            }) : (0, _v41.translate)({
              singular: "Your team's account needs attention - your team might lose access to some videos in {DAYS} day",
              plural: "Your team's account needs attention - your team might lose access to some videos in {DAYS} days",
              count: _v1,
              replacements: {
                DAYS: _v1
              },
              dictionary: {
                es: {
                  singular: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} día",
                  plural: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} días"
                },
                "de-DE": {
                  singular: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tag den Zugriff auf einige Videos verlieren",
                  plural: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tagen den Zugriff auf einige Videos verlieren"
                },
                "fr-FR": {
                  singular: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jour",
                  plural: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jours"
                },
                "ja-JP": {
                  singular: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります",
                  plural: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります"
                },
                "ko-KR": {
                  singular: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다",
                  plural: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다"
                },
                "pt-BR": {
                  singular: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dia",
                  plural: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dias"
                },
                "zh-CN": {
                  singular: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限",
                  plural: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限"
                }
              }
            })
          })]
        }), _v6 ? (0, _v1.jsx)(_v22.Button, {
          as: "a",
          href: _v7,
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v9,
          children: (0, _v41.translate)({
            singular: "Update payment method",
            dictionary: {
              es: {
                singular: "Actualizar método de pago"
              },
              "de-DE": {
                singular: "Zahlungsmethode aktualisieren"
              },
              "fr-FR": {
                singular: "Mettre à jour le mode de paiement"
              },
              "ja-JP": {
                singular: "お支払い方法を更新"
              },
              "ko-KR": {
                singular: "결제 수단 업데이트"
              },
              "pt-BR": {
                singular: "Atualizar método de pagamento"
              },
              "zh-CN": {
                singular: "更新付款方式"
              }
            }
          })
        }) : (0, _v1.jsx)(_v22.Button, {
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v10,
          children: (0, _v41.translate)({
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
        })]
      });
    };
  var _v49 = _v0.i(0);
  let _v50 = ({
      analytics: _v0,
      isOpen: _v1,
      onClose: _v2,
      daysRemaining: _v3,
      ownerName: _v4,
      useHigherFrictionCopy: _v5 = !1
    }) => {
      let _v6 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        _v1 && !_v6.current && _v0.trackModalDisplayed({
          variant: "member",
          daysRemaining: _v3
        }), _v6.current = _v1;
      }, [_v0, _v3, _v1]);
      let _v7 = (0, _v2.useCallback)(() => {
        _v0.trackModalDismissed({
          variant: "member",
          daysRemaining: _v3
        }), _v2();
      }, [_v0, _v3, _v2]);
      return _v1 ? (0, _v1.jsxs)(_v26.Modal, {
        isOpen: !0,
        onClose: _v7,
        size: ["full", "md"],
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v31.ModalOverlay, {}), (0, _v1.jsxs)(_v29.ModalContent, {
          maxWidth: {
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
          borderRadius: {
            base: "0",
            md: "20px"
          },
          margin: {
            base: "0",
            md: "auto"
          },
          overflow: "hidden",
          children: [(0, _v1.jsxs)(_v24.Flex, {
            px: "24px",
            pt: "24px",
            pb: "8px",
            alignItems: "flex-start",
            gap: "10px",
            children: [(0, _v1.jsxs)(_v21.Box, {
              flex: "1",
              children: [(0, _v1.jsx)(_v32.Text, {
                variant: "heading-md",
                children: (0, _v41.translate)({
                  singular: "Your team's account needs attention",
                  dictionary: {
                    es: {
                      singular: "La cuenta de su equipo necesita atención"
                    },
                    "de-DE": {
                      singular: "Das Konto Ihres Teams benötigt Aufmerksamkeit"
                    },
                    "fr-FR": {
                      singular: "Le compte de votre équipe nécessite une attention"
                    },
                    "ja-JP": {
                      singular: "チームのアカウントに対応が必要です"
                    },
                    "ko-KR": {
                      singular: "팀 계정에 조치가 필요합니다"
                    },
                    "pt-BR": {
                      singular: "A conta da sua equipe precisa de atenção"
                    },
                    "zh-CN": {
                      singular: "您的团队账户需要关注"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v32.Text, {
                variant: "body-md",
                color: "text-secondary",
                mt: "4px",
                children: (0, _v41.translate)({
                  singular: "There's been an issue with your team's plan",
                  dictionary: {
                    es: {
                      singular: "Se ha producido un problema con el plan de su equipo"
                    },
                    "de-DE": {
                      singular: "Es gab ein Problem mit dem Plan Ihres Teams"
                    },
                    "fr-FR": {
                      singular: "Un problème est survenu avec le forfait de votre équipe"
                    },
                    "ja-JP": {
                      singular: "チームのプランに問題が発生しました"
                    },
                    "ko-KR": {
                      singular: "팀 요금제에 문제가 발생했습니다"
                    },
                    "pt-BR": {
                      singular: "Houve um problema com o plano da sua equipe"
                    },
                    "zh-CN": {
                      singular: "您的团队的计划出现了问题"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v28.ModalCloseButton, {
              position: "static"
            })]
          }), (0, _v1.jsx)(_v27.ModalBody, {
            px: "24px",
            pt: "12px",
            pb: "24px",
            children: (0, _v1.jsxs)(_v33.VStack, {
              gap: "16px",
              align: "stretch",
              children: [(0, _v1.jsx)(_v32.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v41.translate)({
                  singular: "Some of the account owner's information needs to be updated. Some issues might arise if not resolved.",
                  dictionary: {
                    es: {
                      singular: "Algunos datos del propietario de la cuenta deben actualizarse. Podrían surgir problemas si no se resuelve."
                    },
                    "de-DE": {
                      singular: "Einige Angaben des Kontoinhabers müssen aktualisiert werden. Wenn dies nicht behoben wird, können Probleme auftreten."
                    },
                    "fr-FR": {
                      singular: "Certaines informations du propriétaire du compte doivent être mises à jour. Des problèmes pourraient survenir si elles ne sont pas résolues."
                    },
                    "ja-JP": {
                      singular: "アカウント所有者の情報の一部を更新する必要があります。未解決のままにすると問題が発生する可能性があります。"
                    },
                    "ko-KR": {
                      singular: "계정 소유자의 일부 정보는 업데이트가 필요합니다. 해결하지 않으면 문제가 발생할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Algumas informações do titular da conta precisam ser atualizadas. Alguns problemas podem surgir se não forem resolvidos."
                    },
                    "zh-CN": {
                      singular: "账户所有者的部分信息需要更新。如未及时更新，可能会引发问题。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v21.Box, {
                p: "14px 16px",
                borderWidth: "1px",
                borderColor: "stroke",
                borderRadius: "12px",
                children: (0, _v1.jsxs)(_v33.VStack, {
                  gap: "10px",
                  align: "stretch",
                  children: [(0, _v1.jsx)(_v32.Text, {
                    variant: "body-xs",
                    fontWeight: "500",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "text-tertiary",
                    children: (0, _v41.translate)({
                      singular: "Account owner",
                      dictionary: {
                        es: {
                          singular: "Propietario de la cuenta"
                        },
                        "de-DE": {
                          singular: "Kontoinhaber"
                        },
                        "fr-FR": {
                          singular: "Titulaire du compte"
                        },
                        "ja-JP": {
                          singular: "アカウント所有者"
                        },
                        "ko-KR": {
                          singular: "계정 소유자"
                        },
                        "pt-BR": {
                          singular: "Proprietário da conta"
                        },
                        "zh-CN": {
                          singular: "账户所有者"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v25.HStack, {
                    gap: "12px",
                    children: [(0, _v1.jsx)(_v49.Avatar, {
                      size: "sm",
                      alt: _v4,
                      nameProps: {
                        name: _v4
                      }
                    }), (0, _v1.jsx)(_v21.Box, {
                      minW: 0,
                      children: (0, _v1.jsx)(_v32.Text, {
                        variant: "heading-sm",
                        color: "text-primary",
                        children: _v4
                      })
                    })]
                  }), (0, _v1.jsx)(_v21.Box, {
                    borderTopWidth: "1px",
                    borderStyle: "dashed",
                    borderColor: "stroke",
                    pt: "12px",
                    children: (0, _v1.jsx)(_v32.Text, {
                      variant: "body-sm",
                      color: "text-tertiary",
                      children: _v5 ? (0, _v41.translate)({
                        singular: "If this isn't resolved within {DAYS} day, your team could lose access to videos, storage, and collaboration features. Please contact the account owner to solve the issue.",
                        plural: "If this isn't resolved within {DAYS} days, your team could lose access to videos, storage, and collaboration features. Please contact the account owner to solve the issue.",
                        count: _v3,
                        replacements: {
                          DAYS: _v3
                        },
                        dictionary: {
                          es: {
                            singular: "Si esto no se resuelve en {DAYS} día, tu equipo podría perder el acceso a videos, almacenamiento y funciones de colaboración. Por favor, contacta al titular de la cuenta para resolver el problema.",
                            plural: "Si esto no se resuelve en {DAYS} días, tu equipo podría perder el acceso a videos, almacenamiento y funciones de colaboración. Por favor, contacta al titular de la cuenta para resolver el problema."
                          },
                          "de-DE": {
                            singular: "Wenn dieses Problem nicht innerhalb von {DAYS} Tag gelöst wird, könnte Ihr Team den Zugriff auf Videos, Speicherplatz und Funktionen zur Zusammenarbeit verlieren. Bitte kontaktieren Sie den Kontoinhaber, um das Problem zu lösen.",
                            plural: "Wenn dieses Problem nicht innerhalb von {DAYS} Tagen gelöst wird, könnte Ihr Team den Zugriff auf Videos, Speicherplatz und Funktionen zur Zusammenarbeit verlieren. Bitte kontaktieren Sie den Kontoinhaber, um das Problem zu lösen."
                          },
                          "fr-FR": {
                            singular: "Si cela n'est pas résolu dans {DAYS} jour, votre équipe pourrait perdre l'accès aux vidéos, au stockage et aux fonctionnalités de collaboration. Veuillez contacter le propriétaire du compte pour résoudre le problème.",
                            plural: "Si cela n'est pas résolu dans {DAYS} jours, votre équipe pourrait perdre l'accès aux vidéos, au stockage et aux fonctionnalités de collaboration. Veuillez contacter le propriétaire du compte pour résoudre le problème."
                          },
                          "ja-JP": {
                            singular: "{DAYS}日以内に解決されない場合、チームは動画、ストレージ、およびコラボレーション機能へのアクセスを失う可能性があります。問題解決のためにアカウント所有者に連絡してください。",
                            plural: "{DAYS}日以内に解決されない場合、チームは動画、ストレージ、およびコラボレーション機能へのアクセスを失う可能性があります。問題解決のためにアカウント所有者に連絡してください。"
                          },
                          "ko-KR": {
                            singular: "{DAYS}일 이내에 해결되지 않으면 팀은 동영상, 저장 공간 및 협업 기능에 대한 접근 권한을 잃을 수 있습니다. 문제 해결을 위해 계정 소유자에게 연락하세요.",
                            plural: "{DAYS}일 이내에 해결되지 않으면 팀은 동영상, 저장 공간 및 협업 기능에 대한 접근 권한을 잃을 수 있습니다. 문제 해결을 위해 계정 소유자에게 연락하세요."
                          },
                          "pt-BR": {
                            singular: "Se isso não for resolvido dentro de {DAYS} dia, sua equipe poderá perder o acesso a vídeos, armazenamento e recursos de colaboração. Por favor, entre em contato com o proprietário da conta para resolver o problema.",
                            plural: "Se isso não for resolvido dentro de {DAYS} dias, sua equipe poderá perder o acesso a vídeos, armazenamento e recursos de colaboração. Por favor, entre em contato com o proprietário da conta para resolver o problema."
                          },
                          "zh-CN": {
                            singular: "如果在 {DAYS} 天内未解决此问题，您的团队可能会失去对视频、存储和协作功能的访问权限。请联系帐户所有者以解决该问题。",
                            plural: "如果在 {DAYS} 天内未解决此问题，您的团队可能会失去对视频、存储和协作功能的访问权限。请联系帐户所有者以解决该问题。"
                          }
                        }
                      }) : (0, _v41.translate)({
                        singular: "If unresolved in {DAYS} day, your team may lose access to some videos. Please contact the account owner to solve the issue.",
                        plural: "If unresolved in {DAYS} days, your team may lose access to some videos. Please contact the account owner to solve the issue.",
                        count: _v3,
                        replacements: {
                          DAYS: _v3
                        },
                        dictionary: {
                          es: {
                            singular: "Si no se resuelve en {DAYS} día, es posible que su equipo pierda acceso a algunos videos. Por favor, póngase en contacto con el propietario de la cuenta para solucionar el problema.",
                            plural: "Si no se resuelve en {DAYS} días, es posible que su equipo pierda acceso a algunos videos. Por favor, póngase en contacto con el propietario de la cuenta para solucionar el problema."
                          },
                          "de-DE": {
                            singular: "Wenn das Problem nicht innerhalb von {DAYS} Tag gelöst wird, könnte Ihr Team den Zugriff auf einige Videos verlieren. Bitte kontaktieren Sie den Kontoinhaber, um das Problem zu beheben.",
                            plural: "Wenn das Problem nicht innerhalb von {DAYS} Tagen gelöst wird, könnte Ihr Team den Zugriff auf einige Videos verlieren. Bitte kontaktieren Sie den Kontoinhaber, um das Problem zu beheben."
                          },
                          "fr-FR": {
                            singular: "Si cela n'est pas résolu dans {DAYS} jour, votre équipe pourrait perdre l'accès à certaines vidéos. Veuillez contacter le propriétaire du compte pour résoudre le problème.",
                            plural: "Si cela n'est pas résolu dans {DAYS} jours, votre équipe pourrait perdre l'accès à certaines vidéos. Veuillez contacter le propriétaire du compte pour résoudre le problème."
                          },
                          "ja-JP": {
                            singular: "{DAYS}日以内に解決されない場合、チームは一部の動画へのアクセスを失う可能性があります。問題を解決するためにアカウント所有者に連絡してください。",
                            plural: "{DAYS}日以内に解決されない場合、チームは一部の動画へのアクセスを失う可能性があります。問題を解決するためにアカウント所有者に連絡してください。"
                          },
                          "ko-KR": {
                            singular: "{DAYS}일 이내에 해결되지 않으면, 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다. 문제를 해결하려면 계정 소유자에게 문의하세요.",
                            plural: "{DAYS}일 이내에 해결되지 않으면, 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다. 문제를 해결하려면 계정 소유자에게 문의하세요."
                          },
                          "pt-BR": {
                            singular: "Se não for resolvido em {DAYS} dia, sua equipe pode perder acesso a alguns vídeos. Por favor, entre em contato com o titular da conta para resolver o problema.",
                            plural: "Se não for resolvido em {DAYS} dias, sua equipe pode perder acesso a alguns vídeos. Por favor, entre em contato com o titular da conta para resolver o problema."
                          },
                          "zh-CN": {
                            singular: "如果在 {DAYS} 天内未解决，您的团队可能会失去对部分视频的访问权限。请联系账户所有者以解决该问题。",
                            plural: "如果在 {DAYS} 天内未解决，您的团队可能会失去对部分视频的访问权限。请联系账户所有者以解决该问题。"
                          }
                        }
                      })
                    })
                  })]
                })
              })]
            })
          })]
        })]
      }) : null;
    },
    _v51 = ({
      analytics: _v0,
      variant: _v1,
      daysRemaining: _v2,
      videoTitle: _v3,
      playerWidth: _v4,
      onMemberLearnMore: _v5,
      routeThroughDunning: _v6 = !1,
      returnUrl: _v7
    }) => {
      let _v8 = "admin" === _v1,
        _v9 = (0, _v20.buildGracePeriodCheckoutHref)({
          routeThroughDunning: _v6,
          returnUrl: _v7
        }),
        _v10 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        _v10.current || (_v0.trackBannerDisplayed({
          variant: _v1,
          daysRemaining: _v2
        }), _v10.current = !0);
      }, [_v0, _v2, _v1]);
      let _v11 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v1,
            daysRemaining: _v2
          });
        }, [_v0, _v2, _v1]),
        _v12 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v1,
            daysRemaining: _v2
          }), _v5();
        }, [_v0, _v2, _v5, _v1]);
      return (0, _v1.jsxs)(_v24.Flex, {
        align: ["flex-start", "center"],
        justify: "space-between",
        direction: ["column", "row"],
        gap: "md",
        px: "16px",
        py: "12px",
        mb: void 0 !== _v4 ? "md" : void 0,
        width: "100%",
        maxWidth: void 0 !== _v4 ? (0, _v46.rem)(_v4) : void 0,
        borderRadius: "12px",
        bg: "status-caution-secondary",
        children: [(0, _v1.jsxs)(_v25.HStack, {
          gap: "10px",
          flex: "1",
          minW: 0,
          children: [(0, _v1.jsx)(_v34.CircleExclamationFilled, {
            flexShrink: 0,
            width: "20px",
            height: "20px",
            color: "status-caution-primary"
          }), (0, _v1.jsx)(_v32.Text, {
            variant: "body-md",
            fontWeight: "500",
            color: "orange.700",
            children: _v8 ? (0, _v41.translate)({
              singular: "Payment failed — “{TITLE}” goes offline in {DAYS} day. Update payment to keep it playing.",
              plural: "Payment failed — “{TITLE}” goes offline in {DAYS} days. Update payment to keep it playing.",
              count: _v2,
              replacements: {
                DAYS: _v2,
                TITLE: _v3
              },
              dictionary: {
                es: {
                  singular: "Pago fallido — “{TITLE}” quedará sin conexión en {DAYS} día. Actualice el pago para que siga reproduciéndose.",
                  plural: "Pago fallido — “{TITLE}” quedará sin conexión en {DAYS} días. Actualice el pago para que siga reproduciéndose."
                },
                "de-DE": {
                  singular: "Zahlung fehlgeschlagen — “{TITLE}” geht in {DAYS} Tag offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird.",
                  plural: "Zahlung fehlgeschlagen — “{TITLE}” geht in {DAYS} Tagen offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird."
                },
                "fr-FR": {
                  singular: "Échec du paiement — “{TITLE}” sera hors ligne dans {DAYS} jour. Mettez à jour le paiement pour qu'il continue à être lu.",
                  plural: "Échec du paiement — “{TITLE}” sera hors ligne dans {DAYS} jours. Mettez à jour le paiement pour qu'il continue à être lu."
                },
                "ja-JP": {
                  singular: "支払いに失敗しました — “{TITLE}” は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。",
                  plural: "支払いに失敗しました — “{TITLE}” は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。"
                },
                "ko-KR": {
                  singular: "결제 실패 — “{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요.",
                  plural: "결제 실패 — “{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요."
                },
                "pt-BR": {
                  singular: "Falha no pagamento — “{TITLE}” ficará offline em {DAYS} dia. Atualize o pagamento para que ele continue sendo reproduzido.",
                  plural: "Falha no pagamento — “{TITLE}” ficará offline em {DAYS} dias. Atualize o pagamento para que ele continue sendo reproduzido."
                },
                "zh-CN": {
                  singular: "付款失败 — “{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。",
                  plural: "付款失败 — “{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。"
                }
              }
            }) : (0, _v41.translate)({
              singular: "Your team's account needs attention - your team might lose access to some videos in {DAYS} day",
              plural: "Your team's account needs attention - your team might lose access to some videos in {DAYS} days",
              count: _v2,
              replacements: {
                DAYS: _v2
              },
              dictionary: {
                es: {
                  singular: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} día",
                  plural: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} días"
                },
                "de-DE": {
                  singular: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tag den Zugriff auf einige Videos verlieren",
                  plural: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tagen den Zugriff auf einige Videos verlieren"
                },
                "fr-FR": {
                  singular: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jour",
                  plural: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jours"
                },
                "ja-JP": {
                  singular: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります",
                  plural: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります"
                },
                "ko-KR": {
                  singular: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다",
                  plural: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다"
                },
                "pt-BR": {
                  singular: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dia",
                  plural: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dias"
                },
                "zh-CN": {
                  singular: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限",
                  plural: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限"
                }
              }
            })
          })]
        }), _v8 ? (0, _v1.jsx)(_v22.Button, {
          as: "a",
          href: _v9,
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v11,
          children: (0, _v41.translate)({
            singular: "Update payment",
            dictionary: {
              es: {
                singular: "Actualizar pago"
              },
              "de-DE": {
                singular: "Zahlung aktualisieren"
              },
              "fr-FR": {
                singular: "Mettre à jour le paiement"
              },
              "ja-JP": {
                singular: "支払いを更新"
              },
              "ko-KR": {
                singular: "결제 정보 업데이트"
              },
              "pt-BR": {
                singular: "Atualizar pagamento"
              },
              "zh-CN": {
                singular: "更新付款"
              }
            }
          })
        }) : (0, _v1.jsx)(_v22.Button, {
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v12,
          children: (0, _v41.translate)({
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
        })]
      });
    },
    _v52 = new Date("2026-06-20T00:00:00Z"),
    _v53 = {
      0: "control",
      1: "higher_friction",
      2: "suspension"
    };
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = ["gracePeriodType", "isStorageEntitlementSuspended", "endDate", "originalEndDate", "seatCount", "totalPriceForDisplay", "paymentMethod", "paymentMethod.lastFour", "paymentMethod.textType", "paymentMethod.type"],
    _v58 = ["gracePeriodType", "isStorageEntitlementSuspended", "endDate", "originalEndDate", "totalPriceForDisplay", "paymentMethod", "paymentMethod.lastFour", "paymentMethod.textType", "paymentMethod.type"];
  _v0.s(["useGracePeriodBillingUi", 0, function (_v0) {
    var _v1, _v2, _v3;
    let _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      _v11,
      _v12,
      _v13,
      _v14,
      _v15,
      _v16,
      _v17,
      _v18,
      {
        orionFlag: _v19,
        billingOwnerUserId: _v20,
        layout: _v21
      } = _v0,
      {
        settings: _v22
      } = (0, _v16.useOrionSettings)(),
      _v23 = !!_v22[_v19],
      _v24 = (0, _v19.useViewer)(),
      _v25 = (0, _v3.getViewerBootstrap)(),
      _v26 = _v24?.user?.id ?? _v25?.user?.id,
      _v27 = _v24?.teamUser ?? _v25?.teamUser,
      _v28 = _v24?.teamUser?.plainTextPermissionLevel ?? _v25?.teamUser?.plainTextPermissionLevel,
      _v29 = _v24?.teamUser?.ownerId ?? _v25?.teamUser?.ownerId ?? _v26,
      _v30 = null != _v20 ? _v20 : _v29,
      _v31 = !!_v27 && (_v28 ? _v28 !== _v18.TeamUserPermissionLevel.Owner : null != _v30 && null != _v26 && _v30 !== _v26),
      _v32 = "home" === _v21.type || "library" === _v21.type,
      _v33 = "watch" !== _v21.type || null != _v20 && (_v24?.user?.id === _v20 || _v31 && Number(_v29) === _v20),
      _v34 = _v23 && null != _v30 && _v33,
      _v35 = (_v1 = (0, _v2.useMemo)(() => "home" === _v21.type || "library" === _v21.type ? {
        scope: "home"
      } : {
        scope: "video",
        surface: "watch" === _v21.type ? "watch" : "manage"
      }, [_v21.type]), _v4 = (0, _v54.usePico)(), _v5 = (0, _v2.useCallback)(_v0 => ({
        variant: _v0.variant,
        days_remaining: _v0.daysRemaining
      }), []), _v6 = (0, _v2.useCallback)(_v0 => null !== _v4 && (_v4.track("grace_period_banner_displayed", _v5(_v0)), !0), [_v5, _v4]), _v7 = (0, _v2.useCallback)(_v0 => null !== _v4 && (_v4.track("grace_period_banner_cta_clicked", _v5(_v0)), !0), [_v5, _v4]), _v8 = {
        trackGracePeriodBannerDisplayed: _v6,
        trackGracePeriodBannerCtaClicked: _v7,
        trackGracePeriodModalDisplayed: (0, _v2.useCallback)(_v0 => null !== _v4 && (_v4.track("grace_period_modal_displayed", _v5(_v0)), !0), [_v5, _v4]),
        trackGracePeriodModalCtaClicked: (0, _v2.useCallback)(_v0 => null !== _v4 && (_v4.track("grace_period_modal_cta_clicked", _v5(_v0)), !0), [_v5, _v4]),
        trackGracePeriodModalDismissed: (0, _v2.useCallback)(_v0 => null !== _v4 && (_v4.track("grace_period_modal_dismissed", _v5(_v0)), !0), [_v5, _v4])
      }, _v9 = (0, _v54.usePico)(), _v10 = (0, _v2.useCallback)(_v0 => ({
        days_remaining: _v0.daysRemaining,
        surface: _v0.surface
      }), []), _v11 = (0, _v2.useCallback)(_v0 => null !== _v9 && (_v9.track("video_page_grace_period_banner_displayed", _v10(_v0)), !0), [_v10, _v9]), _v12 = (0, _v2.useCallback)(_v0 => null !== _v9 && (_v9.track("video_page_grace_period_banner_cta_clicked", _v10(_v0)), !0), [_v10, _v9]), _v13 = {
        trackVideoPageGracePeriodBannerDisplayed: _v11,
        trackVideoPageGracePeriodBannerCtaClicked: _v12,
        trackVideoPageGracePeriodModalDisplayed: (0, _v2.useCallback)(_v0 => null !== _v9 && (_v9.track("video_page_grace_period_modal_displayed", _v10(_v0)), !0), [_v10, _v9]),
        trackVideoPageGracePeriodModalCtaClicked: (0, _v2.useCallback)(_v0 => null !== _v9 && (_v9.track("video_page_grace_period_modal_cta_clicked", _v10(_v0)), !0), [_v10, _v9]),
        trackVideoPageGracePeriodModalDismissed: (0, _v2.useCallback)(_v0 => null !== _v9 && (_v9.track("video_page_grace_period_modal_dismissed", _v10(_v0)), !0), [_v10, _v9])
      }, (0, _v2.useMemo)(() => {
        if ("home" === _v1.scope) return {
          trackBannerDisplayed: _v0 => {
            _v8.trackGracePeriodBannerDisplayed(_v0);
          },
          trackBannerCtaClicked: _v0 => {
            _v8.trackGracePeriodBannerCtaClicked(_v0);
          },
          trackModalDisplayed: _v0 => {
            _v8.trackGracePeriodModalDisplayed(_v0);
          },
          trackModalCtaClicked: _v0 => {
            _v8.trackGracePeriodModalCtaClicked(_v0);
          },
          trackModalDismissed: _v0 => {
            _v8.trackGracePeriodModalDismissed(_v0);
          }
        };
        let _v0 = _v1.surface;
        return {
          trackBannerDisplayed: _v0 => {
            _v13.trackVideoPageGracePeriodBannerDisplayed({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackBannerCtaClicked: _v0 => {
            _v13.trackVideoPageGracePeriodBannerCtaClicked({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackModalDisplayed: _v0 => {
            _v13.trackVideoPageGracePeriodModalDisplayed({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackModalCtaClicked: _v0 => {
            _v13.trackVideoPageGracePeriodModalCtaClicked({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackModalDismissed: _v0 => {
            _v13.trackVideoPageGracePeriodModalDismissed({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          }
        };
      }, [_v1, _v8, _v13])),
      _v36 = _v32 ? _v57 : _v58,
      {
        data: _v37
      } = (0, _v6.useGetUserSettingsBillingMembership)(() => !_v34 || _v31 || null == _v30 ? null : {
        select: _v36,
        where: {
          userId: Number(_v30)
        }
      }),
      {
        data: _v38
      } = (0, _v5.useGetUser)(() => _v34 && !_v31 && _v32 && null != _v30 ? {
        select: ["uploadQuota.space.max"],
        where: {
          userId: Number(_v30)
        }
      } : null),
      _v39 = _v38?.uploadQuota?.space?.max ? (0, _v17.formatBytes)(_v38.uploadQuota.space.max, !1) : "",
      {
        data: _v40
      } = (0, _v4.useGetMePaymentMethods)(() => !_v34 || _v31 || !_v37?.gracePeriodType || _v37.paymentMethod ? null : {
        select: ["card.brand", "card.lastFourDigits", "isDefault", "type"],
        query: {
          showDisabled: !1
        }
      }),
      {
        data: _v41
      } = _v15(() => _v34 && _v31 && null != _v30 ? {
        select: ["gracePeriodType", "ownerName", "originalEndDate", "endDate", "uri"],
        where: {
          userId: Number(_v30)
        }
      } : null),
      _v42 = !!(_v34 && (_v31 ? _v41?.gracePeriodType : _v37?.gracePeriodType)),
      _v43 = _v42 ? _v31 ? "member" : "admin" : null,
      _v44 = _v31 ? !!_v41?.gracePeriodType : !!_v37?.gracePeriodType || !!_v37?.isStorageEntitlementSuspended,
      {
        isHigherFriction: _v45,
        isSuspensionArm: _v46
      } = (_v2 = null != _v30 ? Number(_v30) : null, _v3 = {
        hasGracePeriodStartDate: _v44
      }, _v14 = (0, _v19.useViewer)(), _v15 = (0, _v3.getViewerBootstrap)(), _v16 = _v14?.user?.id ?? _v15?.user?.id, _v17 = _v2 ?? (null != _v16 ? Number(_v16) : null), _v18 = _v3?.hasGracePeriodStartDate, (0, _v2.useMemo)(() => {
        let _v0 = !1 === _v18 ? "control" : function (_v0, _v1 = new Date()) {
          return null == _v0 || !Number.isFinite(_v0) || _v1.getTime() < _v52.getTime() ? "control" : _v53[Math.abs(Math.trunc(_v0)) % 3] ?? "control";
        }(_v17);
        return {
          arm: _v0,
          isHigherFriction: "control" !== _v0,
          isSuspensionArm: "suspension" === _v0
        };
      }, [_v17, _v18])),
      _v47 = function ({
        gracePeriodType: _v0,
        isStorageEntitlementSuspended: _v1
      }) {
        return _v0 ? _v1 ? "suspended" : "grace" : "none";
      }({
        gracePeriodType: _v37?.gracePeriodType,
        isStorageEntitlementSuspended: _v37?.isStorageEntitlementSuspended
      }),
      _v48 = _v46 && "suspended" === _v47,
      _v49 = function ({
        eligible: _v0,
        isHigherFriction: _v1,
        phase: _v2
      }) {
        let _v3 = (0, _v55.useDismissCooldown)({
            storageKey: "grace_period_hard_modal_shown_until",
            cooldownMs: 0
          }),
          _v4 = (0, _v55.useDismissCooldown)({
            storageKey: "grace_period_soft_modal_shown_until",
            cooldownMs: 0
          }),
          _v5 = (0, _v55.useDismissCooldown)({
            storageKey: "grace_period_suspended_hard_modal_shown_until",
            cooldownMs: 0
          }),
          _v6 = (0, _v55.useDismissCooldown)({
            storageKey: "grace_period_suspended_soft_modal_shown_until",
            cooldownMs: 0
          }),
          _v7 = "suspended" === _v2,
          {
            isDismissed: _v8,
            dismiss: _v9
          } = _v7 ? _v5 : _v3,
          {
            isDismissed: _v10,
            dismiss: _v11
          } = _v7 ? _v6 : _v4,
          [_v12, _v13] = (0, _v2.useState)("none"),
          _v14 = (0, _v2.useRef)(!1);
        return (0, _v2.useEffect)(() => {
          if (!_v14.current && _v0) {
            if (_v14.current = !0, _v1 && !_v8) {
              _v13("hard"), _v9(), _v11();
              return;
            }
            _v10 || (_v13("soft"), _v11());
          }
        }, [_v0, _v1, _v8, _v10, _v9, _v11]), _v12;
      }({
        eligible: _v42 && "admin" === _v43,
        isHigherFriction: _v45,
        phase: _v48 ? "suspended" : "grace"
      }),
      [_v50, _v51] = (0, _v2.useState)(!1),
      _v52 = (0, _v2.useCallback)(() => {
        _v51(!0);
      }, []),
      [_v53, _v54] = (0, _v2.useState)(!1),
      _v55 = (0, _v2.useCallback)(() => {
        _v54(!0);
      }, []),
      _v56 = (0, _v2.useCallback)(() => {
        _v54(!1);
      }, []);
    (0, _v2.useEffect)(() => {
      "member" !== _v43 && _v54(!1);
    }, [_v43]);
    let _v57 = "watch" === _v21.type || "manage" === _v21.type ? _v21.videoTitle : void 0,
      _v58 = "manage" === _v21.type ? _v21.playerWidth : void 0;
    if (!_v23 || !_v34 || null === _v43 || !_v32 && !_v57) return {
      banner: null,
      modal: null,
      isStorageSuspended: _v48
    };
    let _v59 = _v31 ? (0, _v56.getDisplayedGracePeriodEndDate)(_v41?.gracePeriodType, _v41?.originalEndDate, _v41?.endDate) : (0, _v56.getDisplayedGracePeriodEndDate)(_v37?.gracePeriodType, _v37?.originalEndDate, _v37?.endDate),
      _v60 = (0, _v20.daysUntil)(_v59);
    if ("member" === _v43) {
      if (!_v41?.gracePeriodType || !_v41?.ownerName) return {
        banner: null,
        modal: null,
        isStorageSuspended: _v48
      };
      let _v0 = (0, _v1.jsx)(_v50, {
        analytics: _v35,
        isOpen: _v53,
        onClose: _v56,
        daysRemaining: _v60,
        ownerName: _v41.ownerName,
        useHigherFrictionCopy: _v45
      });
      return _v32 ? {
        banner: (0, _v1.jsx)(_v48, {
          analytics: _v35,
          variant: "member",
          daysRemaining: _v60,
          onAction: _v55
        }),
        modal: _v0,
        isStorageSuspended: !1
      } : {
        banner: (0, _v1.jsx)(_v51, {
          analytics: _v35,
          variant: "member",
          daysRemaining: _v60,
          videoTitle: _v57 ?? "",
          playerWidth: _v58,
          onMemberLearnMore: _v55
        }),
        modal: _v0,
        isStorageSuspended: !1
      };
    }
    let _v61 = _v37?.paymentMethod,
      _v62 = _v40?.data.find(_v0 => _v0.isDefault) ?? _v40?.data[0],
      _v63 = _v61?.textType || (_v61?.type ? _v20.PAYMENT_TYPE_FALLBACK_LABEL[_v61.type] : "") || (0, _v20.getPaymentsServiceCardBrandLabel)(_v62),
      _v64 = _v61?.lastFour ?? _v62?.card?.lastFourDigits ?? "",
      _v65 = "soft" === _v49,
      _v66 = "hard" === _v49 || "soft" === _v49 && !_v50,
      _v67 = _v48 ? "suspended" : "grace",
      _v68 = `${window.location.pathname}${window.location.search}`;
    return _v32 ? {
      banner: _v48 ? (0, _v1.jsx)(_v47, {
        analytics: _v35,
        variant: "admin",
        onMemberLearnMore: _v55,
        routeThroughDunning: _v45,
        returnUrl: _v68
      }) : (0, _v1.jsx)(_v48, {
        analytics: _v35,
        variant: "admin",
        daysRemaining: _v60,
        onAction: _v55,
        routeThroughDunning: _v45,
        returnUrl: _v68
      }),
      modal: (0, _v1.jsx)(_v45, {
        layout: "home",
        analytics: _v35,
        isOpen: _v66,
        onClose: _v52,
        dismissible: _v65,
        returnUrl: _v68,
        phase: _v67,
        daysRemaining: _v60,
        suspensionDate: (0, _v20.formatSuspensionDate)(_v59),
        lastFourDigits: _v64,
        cardBrand: _v63,
        amountDue: _v37?.totalPriceForDisplay ?? "",
        teamMemberCount: _v37?.seatCount ?? 1,
        storageQuotaLabel: _v39
      }),
      isStorageSuspended: _v48
    } : {
      banner: _v48 ? (0, _v1.jsx)(_v47, {
        analytics: _v35,
        variant: "admin",
        playerWidth: _v58,
        onMemberLearnMore: _v55,
        routeThroughDunning: _v45,
        returnUrl: _v68
      }) : (0, _v1.jsx)(_v51, {
        analytics: _v35,
        variant: "admin",
        daysRemaining: _v60,
        videoTitle: _v57 ?? "",
        playerWidth: _v58,
        onMemberLearnMore: _v55,
        routeThroughDunning: _v45,
        returnUrl: _v68
      }),
      modal: (0, _v1.jsx)(_v45, {
        layout: "video",
        analytics: _v35,
        isOpen: _v66,
        onClose: _v52,
        dismissible: _v65,
        returnUrl: _v68,
        phase: _v67,
        daysRemaining: _v60,
        suspensionDate: (0, _v20.formatSuspensionDate)(_v59),
        lastFourDigits: _v64,
        cardBrand: _v63,
        amountDue: _v37?.totalPriceForDisplay ?? "",
        videoTitle: _v57
      }),
      isStorageSuspended: _v48
    };
  }], 0);
}