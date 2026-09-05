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
  let _v21 = () => {
    let _v0 = (0, _v20.usePico)(),
      _v1 = (0, _v4.useCallback)(({
        source: _v0,
        hasPrefilledCode: _v1
      }) => {
        _v0?.track("gift_code_page_viewed", {
          source: _v0,
          has_prefilled_code: _v1
        });
      }, [_v0]),
      _v2 = (0, _v4.useCallback)(({
        billingPlanId: _v0,
        requestSent: _v1
      }) => {
        _v0?.track("gift_code_redeem_started", {
          billing_plan_id: _v0,
          product_tier: "standard",
          periodicity: "annual",
          request_sent: _v1
        });
      }, [_v0]);
    return {
      trackGiftCodePageViewed: _v1,
      trackGiftCodeRedeemStarted: _v2,
      trackGiftCodeRedeemSucceeded: (0, _v4.useCallback)(({
        billingPlanId: _v0,
        orderId: _v1,
        subscriptionId: _v2
      }) => {
        _v0?.track("gift_code_redeem_succeeded", {
          billing_plan_id: _v0,
          order_id: _v1,
          subscription_id: _v2,
          product_tier: "standard",
          periodicity: "annual"
        });
      }, [_v0]),
      trackGiftCodeRedeemFailed: (0, _v4.useCallback)(({
        billingPlanId: _v0,
        errorReason: _v1,
        httpStatus: _v2,
        requestSent: _v3
      }) => {
        _v0?.track("gift_code_redeem_failed", {
          billing_plan_id: _v0,
          error_reason: _v1,
          http_status: _v2,
          request_sent: _v3,
          product_tier: "standard",
          periodicity: "annual"
        });
      }, [_v0])
    };
  };
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  async function _v30({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v29.measureLatency)("postMeGiftCodeRedeem", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/gift-code/redeem?fields=${_v1.map(_v26.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v26.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v26.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v26.deepCamelCase)(_v1);
    });
  }
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  function _v33() {
    let {
        mutate: _v0
      } = (0, _v31.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v32.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/gift-code/redeem${(0, _v28.serializeQuery)(_v0)}`, _v30({
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
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v33, {
    endpoint: "/me/gift-code/redeem",
    method: "POST"
  });
  let _v34 = {
      gift_code_already_redeemed: (0, _v6.translate)({
        singular: "This gift code has already been redeemed, or your account already has an active subscription.",
        dictionary: {
          es: {
            singular: "Este código de regalo ya ha sido canjeado, o tu cuenta ya tiene una suscripción activa."
          },
          "de-DE": {
            singular: "Dieser Geschenkcode wurde bereits eingelöst oder Ihr Konto verfügt bereits über ein aktives Abonnement."
          },
          "fr-FR": {
            singular: "Ce code cadeau a déjà été utilisé, ou votre compte possède déjà un abonnement actif."
          },
          "ja-JP": {
            singular: "このギフトコードは既に引き換えられているか、アカウントに既に有効なサブスクリプションがあります。"
          },
          "ko-KR": {
            singular: "이 기프트 코드는 이미 사용되었거나, 귀하의 계정에 이미 활성 구독이 있습니다."
          },
          "pt-BR": {
            singular: "Este código de presente já foi resgatado, ou sua conta já possui uma assinatura ativa."
          },
          "zh-CN": {
            singular: "此礼品码已被兑换，或您的账户已有有效订阅。"
          }
        }
      }),
      gift_code_invalid_or_expired: (0, _v6.translate)({
        singular: "The voucher code entered is invalid or expired. Please check and try again.",
        dictionary: {
          es: {
            singular: "El código de cupón introducido no es válido o ha caducado. Por favor, comprueba y vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Der eingegebene Gutscheincode ist ungültig oder abgelaufen. Bitte prüfen Sie ihn und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Le code du bon saisi est invalide ou expiré. Veuillez vérifier et réessayer."
          },
          "ja-JP": {
            singular: "入力されたバウチャーコードは無効か期限切れです。確認して再度お試しください。"
          },
          "ko-KR": {
            singular: "입력한 바우처 코드가 유효하지 않거나 만료되었습니다. 확인한 후 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "O código do voucher inserido é inválido ou expirou. Por favor, verifique e tente novamente."
          },
          "zh-CN": {
            singular: "输入的凭证代码无效或已过期。请检查后重试。"
          }
        }
      }),
      gift_code_redemption_failed: (0, _v6.translate)({
        singular: "This voucher cannot be redeemed on this account. Please contact support.",
        dictionary: {
          es: {
            singular: "Este cupón no puede canjearse en esta cuenta. Por favor, contacta con soporte."
          },
          "de-DE": {
            singular: "Dieser Gutschein kann für dieses Konto nicht eingelöst werden. Bitte wenden Sie sich an den Support."
          },
          "fr-FR": {
            singular: "Ce bon ne peut pas être utilisé sur ce compte. Veuillez contacter le support."
          },
          "ja-JP": {
            singular: "このバウチャーはこのアカウントでは引き換えできません。サポートにお問い合わせください。"
          },
          "ko-KR": {
            singular: "이 바우처는 이 계정에서는 사용할 수 없습니다. 고객 지원에 문의해 주세요."
          },
          "pt-BR": {
            singular: "Este voucher não pode ser resgatado nesta conta. Por favor, entre em contato com o suporte."
          },
          "zh-CN": {
            singular: "此凭证无法在此账户上兑换。请联系支持团队。"
          }
        }
      }),
      gift_code_redemption_error: (0, _v6.translate)({
        singular: "Something went wrong while redeeming your voucher. Please try again later.",
        dictionary: {
          es: {
            singular: "Algo salió mal al canjear tu cupón. Por favor, inténtalo de nuevo más tarde."
          },
          "de-DE": {
            singular: "Beim Einlösen Ihres Gutscheins ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          },
          "fr-FR": {
            singular: "Une erreur s'est produite lors de l'utilisation du bon. Veuillez réessayer plus tard."
          },
          "ja-JP": {
            singular: "バウチャーの引き換え中に問題が発生しました。後でもう一度お試しください。"
          },
          "ko-KR": {
            singular: "바우처를 등록하는 동안 문제가 발생했습니다. 나중에 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "Algo deu errado ao resgatar seu voucher. Por favor, tente novamente mais tarde."
          },
          "zh-CN": {
            singular: "兑换凭证时出现问题。请稍后再试。"
          }
        }
      }),
      gift_code_plan_not_available: (0, _v6.translate)({
        singular: "This gift code cannot be redeemed. Please check the code and try again.",
        dictionary: {
          es: {
            singular: "Este código de regalo no se puede canjear. Por favor, comprueba el código y vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Dieser Geschenkcode kann nicht eingelöst werden. Bitte prüfen Sie den Code und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Ce code cadeau ne peut pas être utilisé. Veuillez vérifier le code et réessayer."
          },
          "ja-JP": {
            singular: "このギフトコードは引き換えできません。コードを確認して再度お試しください。"
          },
          "ko-KR": {
            singular: "이 기프트 코드는 사용할 수 없습니다. 코드를 확인한 후 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "Este código de presente não pode ser resgatado. Por favor, verifique o código e tente novamente."
          },
          "zh-CN": {
            singular: "此礼品码无法兑换。请检查代码并重试。"
          }
        }
      }),
      network: (0, _v6.translate)({
        singular: "Something went wrong while redeeming your voucher. Please try again later.",
        dictionary: {
          es: {
            singular: "Algo salió mal al canjear tu cupón. Por favor, inténtalo de nuevo más tarde."
          },
          "de-DE": {
            singular: "Beim Einlösen Ihres Gutscheins ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          },
          "fr-FR": {
            singular: "Une erreur s'est produite lors de l'utilisation du bon. Veuillez réessayer plus tard."
          },
          "ja-JP": {
            singular: "バウチャーの引き換え中に問題が発生しました。後でもう一度お試しください。"
          },
          "ko-KR": {
            singular: "바우처를 등록하는 동안 문제가 발생했습니다. 나중에 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "Algo deu errado ao resgatar seu voucher. Por favor, tente novamente mais tarde."
          },
          "zh-CN": {
            singular: "兑换凭证时出现问题。请稍后再试。"
          }
        }
      })
    },
    _v35 = ["id", "orderId", "subscriptionId", "status", "billingPlanId", "productName"],
    _v36 = async _v0 => {
      if (!(_v0 instanceof _v26.NetworkError)) return null;
      try {
        let _v0 = await _v0.res.json();
        if ("object" == typeof _v0 && null !== _v0 && !Array.isArray(_v0)) return {
          error_code: _v0.error_code,
          developer_message: _v0.developer_message
        };
      } catch {}
      return null;
    };
  function _v37({
    prefilledGiftCode: _v0
  }) {
    let _v1 = (0, _v25.useViewer)(),
      [_v2, _v3] = (0, _v4.useState)(_v0 ?? ""),
      [_v4, _v5] = (0, _v4.useState)(!1),
      {
        trackGiftCodePageViewed: _v6
      } = _v21();
    (0, _v22.usePicoEffect)(() => {
      _v6({
        source: "email_link",
        hasPrefilledCode: void 0 !== _v0
      });
    }, [_v0, _v6], {
      once: !0
    });
    let _v7 = (0, _v19.useCampaignIdOverride)(),
      {
        data: _v8,
        isLoading: _v9,
        error: _v10,
        mutate: _v11
      } = (0, _v18.useGetMeSubscriptionProducts)(() => _v1 ? {
        select: _v17.SUBSCRIPTION_PRODUCT_FIELDS,
        query: {
          country: _v1.location,
          tiers: ["standard"],
          ...(null != _v7 ? {
            campaignId: _v7
          } : {}),
          vuid: _v1.vuid
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v12 = _v8 ? _v8.data?.[0] : void 0,
      _v13 = _v12?.plans?.annual,
      _v14 = void 0 !== _v13 && "available" === _v13.metadata.status,
      {
        redeem: _v15,
        isSubmitting: _v16,
        state: _v17
      } = (({
        product: _v0
      }) => {
        let _v1 = (0, _v25.useViewer)(),
          _v2 = (0, _v3.useRouter)(),
          [_v3, _v4] = (0, _v4.useState)({
            kind: "idle"
          }),
          [_v5, _v6] = (0, _v4.useState)(null),
          _v7 = (0, _v4.useRef)(0),
          {
            trackGiftCodeRedeemStarted: _v8,
            trackGiftCodeRedeemSucceeded: _v9,
            trackGiftCodeRedeemFailed: _v10
          } = _v21(),
          [_v11, _v12] = _v33(),
          _v13 = _v0?.plans?.annual !== void 0 && _v0?.plans?.annual.metadata.status === "available";
        return (0, _v4.useEffect)(() => {
          if (null !== _v5 && !_v12.loading && _v12.called && _v12.callCount !== _v7.current) {
            if (_v7.current = _v12.callCount, null !== _v12.error) return void _v36(_v12.error).then(_v0 => {
              let _v1 = ("string" == typeof _v0?.developer_message ? _v0.developer_message : "").replace(/\.$/, ""),
                _v2 = _v0?.error_code === 0 && ("gift_code_already_redeemed" === _v1 || "gift_code_invalid_or_expired" === _v1 || "gift_code_redemption_failed" === _v1 || "gift_code_plan_not_available" === _v1 || "gift_code_redemption_error" === _v1) ? _v1 : "gift_code_redemption_error",
                _v3 = _v12.error instanceof _v26.NetworkError ? _v12.error.status : null;
              _v10({
                billingPlanId: _v5.billingPlanId,
                errorReason: _v2,
                httpStatus: _v3,
                requestSent: _v5.requestSent
              }), _v4({
                kind: "failed",
                userMessage: _v34[_v2],
                failureReason: _v2,
                httpStatus: _v3
              });
            });
            if (null != _v12.data) {
              let _v0 = _v12.data;
              _v4({
                kind: "succeeded",
                response: {
                  id: _v0.id,
                  order_id: _v0.orderId,
                  subscription_id: _v0.subscriptionId,
                  status: _v0.status,
                  billing_plan_id: _v0.billingPlanId,
                  product_name: _v0.productName
                }
              }), _v9({
                billingPlanId: _v0.billingPlanId,
                orderId: _v0.orderId,
                subscriptionId: _v0.subscriptionId
              }), _v2.replace(`/onboarding?source=gift_code&product_name=${encodeURIComponent(_v0.productName)}&user_email=${encodeURIComponent(_v1?.user?.email ?? "")}&order_id=${encodeURIComponent(_v0.orderId)}`);
            }
          }
        }, [_v5, _v12, _v2, _v10, _v9, _v1]), {
          redeem: (0, _v4.useCallback)(async ({
            giftCode: _v0,
            billingPlanId: _v1
          }) => {
            if (!_v13 || null === _v1) {
              _v8({
                billingPlanId: "",
                requestSent: !1
              }), _v10({
                billingPlanId: null,
                errorReason: "gift_code_plan_not_available",
                httpStatus: null,
                requestSent: !1
              }), _v6(null), _v4({
                kind: "failed",
                userMessage: _v34.gift_code_plan_not_available,
                failureReason: "gift_code_plan_not_available",
                httpStatus: null
              });
              return;
            }
            _v8({
              billingPlanId: _v1,
              requestSent: !0
            }), _v6({
              billingPlanId: _v1,
              requestSent: !0
            }), _v4({
              kind: "submitting"
            }), await _v11({
              select: _v35,
              variables: {
                giftCode: _v0,
                billingPlanId: _v1
              }
            });
          }, [_v13, _v11, _v10, _v8]),
          isSubmitting: "submitting" === _v3.kind,
          state: _v3
        };
      })({
        product: _v12
      }),
      _v18 = "" === _v2.trim(),
      _v19 = (0, _v4.useCallback)(() => {
        _v18 ? _v5(!0) : _v14 ? _v15({
          billingPlanId: _v13.id,
          giftCode: _v2
        }) : _v15({
          billingPlanId: null,
          giftCode: _v2
        });
      }, [_v13, _v2, _v18, _v14, _v15]),
      _v20 = (0, _v4.useMemo)(() => _v4 ? (0, _v6.translate)({
        singular: "Please enter your gift code.",
        dictionary: {
          es: {
            singular: "Por favor, introduce tu código de regalo."
          },
          "de-DE": {
            singular: "Bitte geben Sie Ihren Geschenkcode ein."
          },
          "fr-FR": {
            singular: "Veuillez saisir votre code cadeau."
          },
          "ja-JP": {
            singular: "ギフトコードを入力してください。"
          },
          "ko-KR": {
            singular: "기프트 코드를 입력해 주세요."
          },
          "pt-BR": {
            singular: "Por favor, insira seu código de presente."
          },
          "zh-CN": {
            singular: "请输入您的礼品码。"
          }
        }
      }) : "failed" === _v17.kind ? _v17.userMessage : null, [_v17, _v4]),
      _v21 = null !== _v20;
    return _v9 ? null : null != _v10 ? (0, _v1.jsx)(_v12.Flex, {
      minHeight: "100vh",
      bg: "surface",
      justifyContent: "center",
      alignItems: "center",
      children: (0, _v1.jsxs)(_v15.VStack, {
        spacing: 4,
        maxWidth: (0, _v16.rem)(400),
        padding: 5,
        alignItems: "center",
        textAlign: "center",
        children: [(0, _v1.jsx)(_v24.default, {
          height: "32",
          width: "74"
        }), (0, _v1.jsx)(_v14.Text, {
          variant: "heading-md",
          children: (0, _v6.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          })
        }), (0, _v1.jsx)(_v14.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v6.translate)({
            singular: "Unable to load data. Please try again.",
            dictionary: {
              es: {
                singular: "No se han podido cargar los datos. Por favor, inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Daten konnten nicht geladen werden. Bitte versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Impossible de charger les données. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "データの読み込みに失敗しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "데이터를 불러올 수 없습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Não foi possível carregar os dados. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "无法加载数据。请再试一次。"
              }
            }
          })
        }), (0, _v1.jsx)(_v11.Button, {
          variant: "primary",
          onClick: () => void _v11(),
          "data-testid": "catalog-retry",
          children: (0, _v6.translate)({
            singular: "Try again",
            dictionary: {
              es: {
                singular: "Intentar de nuevo"
              },
              "de-DE": {
                singular: "Nochmal versuchen"
              },
              "fr-FR": {
                singular: "Veuillez réessayer"
              },
              "ja-JP": {
                singular: "再試行してください"
              },
              "ko-KR": {
                singular: "다시 시도하세요"
              },
              "pt-BR": {
                singular: "Tente de novo"
              },
              "zh-CN": {
                singular: "再试一次"
              }
            }
          })
        })]
      })
    }) : (0, _v1.jsxs)(_v12.Flex, {
      minHeight: "100vh",
      bg: "surface",
      justifyContent: "space-between",
      children: [(0, _v1.jsxs)(_v12.Flex, {
        width: {
          base: "100%",
          lg: "50%"
        },
        direction: "column",
        children: [(0, _v1.jsx)(_v10.Box, {
          marginTop: (0, _v16.rem)(32),
          alignSelf: "center",
          children: (0, _v1.jsx)(_v24.default, {
            height: "32",
            width: "74"
          })
        }), (0, _v1.jsx)(_v12.Flex, {
          width: "100%",
          maxWidth: (0, _v16.rem)(400),
          padding: {
            base: 5,
            lg: 0
          },
          margin: {
            base: `${(0, _v16.rem)(20)} 0`,
            lg: "auto 0"
          },
          alignSelf: "center",
          direction: "column",
          children: (0, _v1.jsxs)(_v15.VStack, {
            spacing: 6,
            alignItems: "stretch",
            children: [(0, _v1.jsxs)(_v15.VStack, {
              spacing: 2,
              alignItems: "center",
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "heading-md",
                textAlign: "center",
                children: (0, _v6.translate)({
                  singular: "Redeem your Vimeo voucher",
                  dictionary: {
                    es: {
                      singular: "Canjea tu cupón de Vimeo"
                    },
                    "de-DE": {
                      singular: "Lösen Sie Ihren Vimeo-Gutschein ein"
                    },
                    "fr-FR": {
                      singular: "Utilisez votre voucher Vimeo"
                    },
                    "ja-JP": {
                      singular: "Vimeo のバウチャーを引き換える"
                    },
                    "ko-KR": {
                      singular: "Vimeo 바우처를 사용하세요"
                    },
                    "pt-BR": {
                      singular: "Resgate seu voucher do Vimeo"
                    },
                    "zh-CN": {
                      singular: "兑换您的 Vimeo 代金券"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                textAlign: "center",
                children: (0, _v6.translate)({
                  singular: "Enter your voucher to start using Vimeo Standard.",
                  dictionary: {
                    es: {
                      singular: "Introduce tu cupón para empezar a usar Vimeo Standard."
                    },
                    "de-DE": {
                      singular: "Geben Sie Ihren Gutschein ein, um Vimeo Standard zu nutzen."
                    },
                    "fr-FR": {
                      singular: "Saisissez votre voucher pour commencer à utiliser Vimeo Standard."
                    },
                    "ja-JP": {
                      singular: "Vimeo Standard の利用を開始するには、バウチャーを入力してください。"
                    },
                    "ko-KR": {
                      singular: "Vimeo Standard 사용을 시작하려면 바우처를 입력하세요."
                    },
                    "pt-BR": {
                      singular: "Insira seu voucher para começar a usar Vimeo Standard."
                    },
                    "zh-CN": {
                      singular: "输入您的兑换码以开始使用 Vimeo Standard."
                    }
                  }
                })
              })]
            }), _v21 && (0, _v1.jsx)(_v8.Alert, {
              status: "error",
              "data-testid": "redeem-error",
              children: (0, _v1.jsx)(_v9.AlertDescription, {
                children: _v20
              })
            }), (0, _v1.jsx)("form", {
              onSubmit: _v0 => {
                _v0.preventDefault(), _v19();
              },
              children: (0, _v1.jsx)("fieldset", {
                disabled: _v16,
                style: {
                  border: "none",
                  padding: 0,
                  margin: 0
                },
                children: (0, _v1.jsxs)(_v15.VStack, {
                  spacing: 4,
                  alignItems: "stretch",
                  children: [(0, _v1.jsx)(_v23.FloatingInput, {
                    label: (0, _v6.translate)({
                      singular: "Enter your voucher code",
                      dictionary: {
                        es: {
                          singular: "Introduce tu código de cupón"
                        },
                        "de-DE": {
                          singular: "Geben Sie Ihren Gutscheincode ein"
                        },
                        "fr-FR": {
                          singular: "Saisissez votre code voucher"
                        },
                        "ja-JP": {
                          singular: "バウチャーコードを入力してください"
                        },
                        "ko-KR": {
                          singular: "바우처 코드를 입력하세요"
                        },
                        "pt-BR": {
                          singular: "Insira seu código do voucher"
                        },
                        "zh-CN": {
                          singular: "输入您的兑换码"
                        }
                      }
                    }),
                    name: "gift-code",
                    value: _v2,
                    onValueChange: _v0 => {
                      _v3(_v0), _v4 && _v5(!1);
                    },
                    isInvalid: _v21,
                    "data-testid": "gift-code-input"
                  }), (0, _v1.jsx)(_v11.Button, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    width: "100%",
                    isLoading: _v16,
                    "data-testid": "redeem-submit",
                    children: (0, _v6.translate)({
                      singular: "Redeem",
                      dictionary: {
                        es: {
                          singular: "Canjear"
                        },
                        "de-DE": {
                          singular: "Einlösen"
                        },
                        "fr-FR": {
                          singular: "Utiliser"
                        },
                        "ja-JP": {
                          singular: "使用する"
                        },
                        "ko-KR": {
                          singular: "VIP 코드 사용"
                        },
                        "pt-BR": {
                          singular: "Utilizar"
                        },
                        "zh-CN": {
                          singular: "兑换"
                        }
                      }
                    })
                  })]
                })
              })
            })]
          })
        }), (0, _v1.jsx)(_v10.Box, {
          marginBottom: (0, _v16.rem)(32),
          alignSelf: "center",
          children: (0, _v1.jsxs)(_v14.Text, {
            variant: "body-md",
            color: "text-secondary",
            textAlign: "center",
            children: [(0, _v6.translate)({
              singular: "Can't redeem the code?",
              dictionary: {
                es: {
                  singular: "¿No puedes canjear el código?"
                },
                "de-DE": {
                  singular: "Lässt sich der Code nicht einlösen?"
                },
                "fr-FR": {
                  singular: "Impossible d'utiliser le code ?"
                },
                "ja-JP": {
                  singular: "コードを引き換えられませんか？"
                },
                "ko-KR": {
                  singular: "코드를 사용하실 수 없나요?"
                },
                "pt-BR": {
                  singular: "Não consegue resgatar o código?"
                },
                "zh-CN": {
                  singular: "无法兑换该代码?"
                }
              }
            }), " ", (0, _v1.jsx)(_v13.Link, {
              href: "https://help.vimeo.com",
              isExternal: !0,
              "data-testid": "redeem-get-help",
              children: (0, _v6.translate)({
                singular: "Get help",
                dictionary: {
                  es: {
                    singular: "Obtener ayuda"
                  },
                  "de-DE": {
                    singular: "Hilfe"
                  },
                  "fr-FR": {
                    singular: "Obtenir de l'aide"
                  },
                  "ja-JP": {
                    singular: "ヘルプ"
                  },
                  "ko-KR": {
                    singular: "도움 받기"
                  },
                  "pt-BR": {
                    singular: "Obter ajuda"
                  },
                  "zh-CN": {
                    singular: "获取帮助"
                  }
                }
              })
            })]
          })
        })]
      }), (0, _v1.jsx)(_v10.Box, {
        width: "50%",
        display: {
          base: "none",
          lg: "flex"
        },
        maxHeight: "100vh",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v10.Box, {
          as: "video",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          autoPlay: !0,
          loop: !0,
          playsInline: !0,
          muted: !0,
          src: "https://player.vimeo.com/progressive_redirect/playback/1088206071/rendition/720p/file.mp4?loc=external&signature=7a8a69b0cd71e9fd6be8e8ea09efb9c270b710aef33c3aef3b86e953d9eab568",
          poster: "https://i.vimeocdn.com/custom_asset/d5d3585a7f0da266f9c067753e2677d6",
          "aria-label": (0, _v6.translate)({
            singular: "Vimeo showreel",
            dictionary: {
              es: {
                singular: "Showreel de Vimeo"
              },
              "de-DE": {
                singular: "Vimeo Showreel"
              },
              "fr-FR": {
                singular: "Bande démo Vimeo"
              },
              "ja-JP": {
                singular: "Vimeo ショーリール"
              },
              "ko-KR": {
                singular: "Vimeo 쇼릴"
              },
              "zh-CN": {
                singular: "Vimeo 作品集"
              }
            }
          })
        })
      })]
    });
  }
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    redirect: function (_v0) {
      return `/log_in?redirect=${encodeURIComponent(_v0.resolvedUrl)}`;
    },
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v3.useRouter)(),
      _v1 = (0, _v4.useContext)(_v7.ViewerContext);
    if (!_v0.isReady || !_v1?.user) return null;
    let _v2 = _v0.query["gift-code"];
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: (0, _v6.translate)({
            singular: "Redeem your gift code | Vimeo",
            dictionary: {
              es: {
                singular: "Canjea tu código de regalo | Vimeo"
              },
              "de-DE": {
                singular: "Geschenkcode einlösen | Vimeo"
              },
              "fr-FR": {
                singular: "Utilisez votre code cadeau | Vimeo"
              },
              "ja-JP": {
                singular: "ギフトコードを引き換える | Vimeo"
              },
              "ko-KR": {
                singular: "기프트 코드 사용 | Vimeo"
              },
              "pt-BR": {
                singular: "Resgatar seu código de presente | Vimeo"
              },
              "zh-CN": {
                singular: "兑换您的礼品码 | Vimeo"
              }
            }
          })
        }), (0, _v1.jsx)("meta", {
          name: "description",
          content: (0, _v6.translate)({
            singular: "Redeem your Vimeo gift code.",
            dictionary: {
              es: {
                singular: "Canjea tu código de regalo de Vimeo."
              },
              "de-DE": {
                singular: "Lösen Sie Ihren Vimeo-Geschenkcode ein."
              },
              "fr-FR": {
                singular: "Utilisez votre code cadeau Vimeo."
              },
              "ja-JP": {
                singular: "Vimeo のギフトコードを引き換える。"
              },
              "ko-KR": {
                singular: "Vimeo 기프트 코드 사용"
              },
              "pt-BR": {
                singular: "Resgate seu código de presente do Vimeo."
              },
              "zh-CN": {
                singular: "兑换您的 Vimeo 礼品码。"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v37, {
        prefilledGiftCode: "string" == typeof _v2 && "" !== _v2 ? _v2 : void 0
      })]
    });
  }], 0);
}