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
  let _v21 = () => ((0, _v2.useEffect)(() => {
    let _v0 = new URLSearchParams(window.location.search),
      _v1 = _v0.get("extole_event_data"),
      _v2 = _v0.get("extole_coupon"),
      _v3 = _v0.get("extole_zone_advocate_code"),
      _v4 = _v0.get("extole_zone_click_event_id");
    if (_v1 && _v2 && _v3 && _v4) try {
      let _v0 = decodeURIComponent(_v1),
        _v1 = JSON.parse(_v0);
      (window._gtm || []).push(_v1);
      let _v2 = document.createElement("script");
      _v2.type = "extole/conversion", _v2.innerHTML = _v20.default.sanitize(JSON.stringify(_v1, null, 2)), document.body.appendChild(_v2);
    } catch (_v0) {}
  }, []), null);
  _v0.s(["ExtoleConversionTracker", 0, _v21], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = () => (0, _v1.jsxs)(_v25, {
      children: [(0, _v1.jsxs)(_v26, {
        children: [(0, _v1.jsx)(_v27, {
          children: (0, _v10.translate)({
            singular: "Your plan includes a free Mevo Start camera.",
            dictionary: {
              es: {
                singular: "Tu plan incluye una cámara Mevo Start gratis."
              },
              "de-DE": {
                singular: "Dein Tarif beinhaltet eine kostenlose Mevo Start-Kamera. "
              },
              "fr-FR": {
                singular: "Votre abonnement comprend une caméra Mevo Start gratuite."
              },
              "ja-JP": {
                singular: "プランには無料のMevo Startカメラが含まれています。"
              },
              "ko-KR": {
                singular: "회원님의 요금제에는 무료 Mevo Start 카메라가 포함되어 있습니다."
              },
              "pt-BR": {
                singular: "Seu plano inclui uma câmera Mevo Start gratuita."
              },
              "zh-CN": {
                singular: "您的套餐中包括一个免费的 Mevo Start 摄像头。"
              }
            }
          })
        }), (0, _v1.jsx)(_v15.Text, {
          children: (0, _v10.translate)({
            singular: "You'll get a separate email within 10 days with your offer code. Redeem it for a free Mevo Start.*",
            dictionary: {
              es: {
                singular: "Recibirás otro correo electrónico dentro de los 10 días con tu código de oferta. Canjéalo por una Mevo Start gratis.*"
              },
              "de-DE": {
                singular: "Innerhalb der nächsten 10 Tage erhältst du eine separate E-Mail mit deinem Angebotscode. Hol dir damit eine kostenlose Mevo Start.*"
              },
              "fr-FR": {
                singular: "Vous recevrez sous 10 jours un autre e-mail contenant le code de l'offre. Échangez-le gratuitement contre une caméra Mevo Start.*"
              },
              "ja-JP": {
                singular: "10日以内に、オファーコードが記載されたメールが別途届きます。そのコードで無料のMevo Startを手に入れましょう。*"
              },
              "ko-KR": {
                singular: "특별 제안에 대한 코드가 10일 이내에 별도의 이메일로 발송됩니다. 해당 코드를 통해 무료 Mevo Start를 받으세요.*"
              },
              "pt-BR": {
                singular: "Você receberá um outro e-mail dentro de 10 dias com seu código de oferta. Resgate sua oferta para ter uma Mevo Start grátis.*"
              },
              "zh-CN": {
                singular: "您将在 10 天内收到一封电子邮件，其中包含您的优惠代码。可用于兑换免费的 Mevo Start。*"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v28, {
        children: (0, _v10.translate)({
          singular: "*Your Vimeo Premium purchase is non-refundable and will automatically renew each year until you cancel or we terminate. {OFFER_TERMS_LINK}Click here to read our offer's full terms and conditions{/OFFER_TERMS_LINK}. Vimeo's standard refund policy and free-trial period do not apply to purchases made in conjunction with this offer.",
          replacements: {
            OFFER_TERMS_LINK: _v0 => (0, _v1.jsx)(_v14.Link, {
              href: "https://vimeo.com/mevo-2020-terms",
              target: "_blank",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "*Tu compra de Vimeo Premium no es reembolsable y se renovará automáticamente cada año hasta que tú o nosotros la cancelemos. completos de nuestra oferta. {OFFER_TERMS_LINK}Haz clic aquí para leer los términos y condiciones{/OFFER_TERMS_LINK}. Las políticas de reembolso estándar de Vimeo y el período de prueba gratis no se aplican a las compras realizadas con esta oferta."
            },
            "de-DE": {
              singular: "*Beim Erwerb von Vimeo Premium gibt es keine Rückerstattung. Das Abonnement verlängert sich automatisch jedes Jahr bis zu deiner Stornierung oder unserer Kündigung. {OFFER_TERMS_LINK}Klicke hier, um die vollständigen Allgemeinen Geschäftsbedingungen unseres Angebots zu lesen{/OFFER_TERMS_LINK}. Die standardmäßige Richtlinie zur Rückerstattung von Vimeo sowie die kostenlose Probezeit gelten nicht für Käufe in Verbindung mit diesem Angebot."
            },
            "fr-FR": {
              singular: "*Votre achat Vimeo Premium n'est pas remboursable et sera automatiquement renouvelé chaque année jusqu'à ce que vous l'annuliez ou que nous le résilions. {OFFER_TERMS_LINK}Cliquez ici pour lire l'intégralité des conditions générales de notre offre{/OFFER_TERMS_LINK}. La politique de remboursement standard ainsi que la période d'essai gratuit de Vimeo ne peuvent pas s'appliquer aux achats effectués dans le cadre de cette offre."
            },
            "ja-JP": {
              singular: "*Vimeo Premium のご購入は払い戻しできません。また、ユーザーがプランを自らキャンセルするか Vimeoが何らかの理由でプランを終了するまでは、毎年自動的に更新されます。{OFFER_TERMS_LINK}オファーに関する詳細な利用規約は、こちらをクリックしてください。{/OFFER_TERMS_LINK}Vimeoの払い戻しポリシーと無料トライアル期間は、このオファーに関連したご購入には適用されません。"
            },
            "ko-KR": {
              singular: "Vimeo Premium 구매는 환불이 불가하며 요금제를 취소하거나 Vimeo가 종료시킬 때까지 매년 자동 갱신됩니다. {OFFER_TERMS_LINK}여기를 클릭하여 Vimeo의 특별 제안에 대한 전체 이용 약관을 확인하세요{/OFFER_TERMS_LINK}. Vimeo의 표준 환불 정책 및 무료 체험 기간은 해당 제안으로 이루어진 구매에는 적용되지 않습니다."
            },
            "pt-BR": {
              singular: "*Sua compra do Vimeo Premium não é reembolsável e será renovada automaticamente a cada ano até que você cancele ou nós a cancelemos. {OFFER_TERMS_LINK}Clique aqui para ler os termos e condições completos da nossa oferta{/OFFER_TERMS_LINK}. A política padrão de reembolso e o período de teste gratuito do Vimeo não se aplicam às compras feitas em conjunto com esta oferta."
            },
            "zh-CN": {
              singular: "*您购买的 Vimeo Premium 不可退款，每年将自动续订，直至您取消或我们终止。{OFFER_TERMS_LINK}点击此处阅读我们服务的完整条款和条件{/OFFER_TERMS_LINK}。Vimeo 的标准退款政策和免费试用期不适用于与此服务相关的购买。"
            }
          }
        })
      })]
    }),
    _v25 = _v6.default.div.withConfig({
      displayName: "MevoGift__Container",
      componentId: "sc-95e38b4a-0"
    })`
  width: 100%;
`,
    _v26 = _v6.default.div.withConfig({
      displayName: "MevoGift__Top",
      componentId: "sc-95e38b4a-1"
    })`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(0, _v22.rem)(40)};
  background-color: ${(0, _v23.slate)(600)};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${_v23.white};
  }
`,
    _v27 = (0, _v6.default)(_v15.Text).withConfig({
      displayName: "MevoGift__BoldText",
      componentId: "sc-95e38b4a-2"
    })`
  font-weight: 700;

  &:after {
    content: ' ';
    white-space: pre;
  }
`,
    _v28 = _v6.default.div.withConfig({
      displayName: "MevoGift__Bottom",
      componentId: "sc-95e38b4a-3"
    })`
  position: fixed;
  bottom: ${(0, _v22.rem)(30)};
  left: 25%;
  width: 50%;
  height: ${(0, _v22.rem)(30)};
  color: ${(0, _v23.slate)(400)};
  text-align: center;
  font-size: ${(0, _v22.rem)(10)};
  line-height: ${(0, _v22.rem)(14)};
`,
    _v29 = _v2.default.lazy(() => _v0.A(0)),
    _v30 = ({
      shouldShowGiftMessage: _v0,
      tierName: _v1,
      userEmail: _v2,
      zuoraOrderId: _v3
    }) => {
      let _v4 = (0, _v5.useSearchParams)(),
        _v5 = _v4?.get("mwru"),
        _v6 = null;
      _v5 && (_v6 = (0, _v16.isVimeoRedirectableUrl)(_v5) ? _v5 : "/");
      let _v7 = (0, _v5.useRouter)(),
        {
          sendClickOpenMobileLinkEvent: _v8
        } = (0, _v17.useOnBoardingBPEvents)(),
        {
          team: _v9
        } = (0, _v2.useContext)(_v3.StateContext),
        _v10 = (0, _v2.useContext)(_v3.DispatchContext),
        _v11 = (0, _v2.useCallback)(() => {
          _v10({
            type: _v18.Actions.STEP_FORWARD
          });
          try {
            _v7.BigPictureClient.sendEvent(new _v7.Event("onboarding.click_continue_onboarding", 1, {
              product: "Onboarding",
              path: window.parent.location.pathname,
              location: "onboarding"
            }));
          } catch (_v0) {
            console.error(_v0);
          }
        }, [_v10]);
      (0, _v2.useEffect)(() => {
        (0, _v19.trackCompletedOrder)(_v3);
      }, [_v3]);
      let _v12 = ["Plus", "Producer"].includes(_v1);
      return (0, _v1.jsxs)(_v31, {
        children: [(0, _v1.jsx)(_v21, {}), _v0 && (0, _v1.jsx)(_v24, {}), (0, _v1.jsx)(_v2.Suspense, {
          fallback: null,
          children: (0, _v1.jsx)(_v29, {})
        }), (0, _v1.jsx)(_v32, {
          shouldShiftDown: _v0
        }), (0, _v1.jsxs)(_v33, {
          children: [_v9.logoUrl && (0, _v1.jsx)(_v39, {
            src: _v9.logoUrl
          }), (0, _v1.jsx)(_v34, {
            size: "1",
            children: (0, _v10.translate)({
              singular: "Welcome to {TIER_NAME}",
              replacements: {
                TIER_NAME: _v1
              },
              dictionary: {
                es: {
                  singular: "Bienvenido a {TIER_NAME}"
                },
                "de-DE": {
                  singular: "Herzlich willkommen zu {TIER_NAME}"
                },
                "fr-FR": {
                  singular: "Bienvenue sur {TIER_NAME}"
                },
                "ja-JP": {
                  singular: "{TIER_NAME} へようこそ"
                },
                "ko-KR": {
                  singular: "{TIER_NAME}에 오신 것을 환영합니다"
                },
                "pt-BR": {
                  singular: "Bem-vindo (a) ao {TIER_NAME}"
                },
                "zh-CN": {
                  singular: "欢迎来到 {TIER_NAME}"
                }
              }
            })
          }), (0, _v1.jsxs)(_v36, {
            children: [(0, _v1.jsx)(_v35, {
              format: "soft",
              children: (0, _v10.translate)({
                singular: "We just sent your receipt to {EMAIL}.",
                replacements: {
                  EMAIL: (0, _v1.jsx)("strong", {
                    children: _v2 || (0, _v10.translate)({
                      singular: "your email",
                      dictionary: {
                        es: {
                          singular: "su correo electrónico"
                        },
                        "de-DE": {
                          singular: "Ihre E-Mail-Adresse"
                        },
                        "fr-FR": {
                          singular: "Votre adresse e-mail"
                        },
                        "ja-JP": {
                          singular: "あなたのEメールアドレス"
                        },
                        "ko-KR": {
                          singular: "내 이메일"
                        },
                        "pt-BR": {
                          singular: "seu e-mail"
                        },
                        "zh-CN": {
                          singular: "您的电子邮件地址"
                        }
                      }
                    })
                  }, "user_email")
                },
                dictionary: {
                  es: {
                    singular: "Acabamos de enviarte el recibo a {EMAIL}."
                  },
                  "de-DE": {
                    singular: "Wir haben gerade die Rechnung an {EMAIL}geschickt."
                  },
                  "fr-FR": {
                    singular: "Nous venons d'envoyer votre reçu à {EMAIL}."
                  },
                  "ja-JP": {
                    singular: "{EMAIL} 宛てに領収書をお送りしました。"
                  },
                  "ko-KR": {
                    singular: "방금 {EMAIL}(으)로 영수증을 보냈습니다."
                  },
                  "pt-BR": {
                    singular: "Acabamos de enviar seu recibo para {EMAIL}."
                  },
                  "zh-CN": {
                    singular: "我们刚刚将您的收据发送到 {EMAIL}。"
                  }
                }
              })
            }), !_v6 && (0, _v1.jsx)(_v35, {
              format: "soft",
              children: _v12 ? (0, _v10.translate)({
                singular: "Get started by uploading a video.",
                dictionary: {
                  es: {
                    singular: "Para empezar, suba un video."
                  },
                  "de-DE": {
                    singular: "Laden Sie zunächst ein Video hoch."
                  },
                  "fr-FR": {
                    singular: "Commencez par mettre une vidéo en ligne."
                  },
                  "ja-JP": {
                    singular: "動画をアップロードして始めましょう。"
                  },
                  "ko-KR": {
                    singular: "동영상을 업로드하여 시작해 보세요."
                  },
                  "pt-BR": {
                    singular: "Para começar, vamos carregar um vídeo."
                  },
                  "zh-CN": {
                    singular: "先上传视频。"
                  }
                }
              }) : (0, _v10.translate)({
                singular: "Set up your account with a name and logo, and invite people to join your team.",
                dictionary: {
                  es: {
                    singular: "Configura tu cuenta con un nombre y un logo, e invita a otras personas a unirse a tu equipo."
                  },
                  "de-DE": {
                    singular: "Richte dein Konto mit einem Namen und einem Logo ein und lade Leute ein, deinem Team beizutreten."
                  },
                  "fr-FR": {
                    singular: "Configurez votre compte avec un nom et un logo, et invitez des personnes à rejoindre votre équipe."
                  },
                  "ja-JP": {
                    singular: "名前とロゴでアカウントを設定し、チームに参加するようユーザーを招待しましょう。"
                  },
                  "ko-KR": {
                    singular: "계정에 이름과 로고를 설정하고 팀에 합류할 사람들을 초대하세요."
                  },
                  "pt-BR": {
                    singular: "Configure sua conta com um nome e logo e convide pessoas para se juntarem à sua equipe."
                  },
                  "zh-CN": {
                    singular: "为您的账户设置名称和徽标，并邀请他人加入您的团队。"
                  }
                }
              })
            })]
          }), _v6 && (0, _v1.jsx)(_v8.Button, {
            onClick: () => {
              _v8(), _v6 && _v7.push(_v6);
            },
            width: "100%",
            children: (0, _v10.translate)({
              singular: "Open Vimeo",
              dictionary: {
                es: {
                  singular: "Abrir Vimeo"
                },
                "de-DE": {
                  singular: "Vimeo öffnen"
                },
                "fr-FR": {
                  singular: "Ouvrir Vimeo"
                },
                "ja-JP": {
                  singular: "Vimeoを開く"
                },
                "ko-KR": {
                  singular: "Vimeo 열기"
                },
                "pt-BR": {
                  singular: "Abrir Vimeo"
                },
                "zh-CN": {
                  singular: "打开 Vimeo"
                }
              }
            })
          }), !_v6 && _v12 && (0, _v1.jsx)(_v37, {
            format: "primary",
            role: "link",
            href: "/upload/videos",
            onClick: () => window.open("/upload/videos", "_blank"),
            children: (0, _v10.translate)({
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
            })
          }), !_v6 && !_v12 && (0, _v1.jsx)(_v37, {
            format: "primary",
            onClick: _v11,
            children: (0, _v10.translate)({
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
          })]
        }), !_v6 && (0, _v1.jsx)(_v38, {
          href: "/",
          target: "_parent",
          format: "soft",
          variant: "minimal",
          onClick: () => {
            try {
              _v7.BigPictureClient.sendEvent(new _v7.Event("onboarding.click_skip_account_setup", 1, {
                product: "Onboarding",
                path: window.parent.location.pathname,
                location: "onboarding"
              }));
            } catch (_v0) {
              console.error(_v0);
            }
          },
          children: _v12 ? (0, _v10.translate)({
            singular: "Skip uploading",
            dictionary: {
              es: {
                singular: "Omitir subida"
              },
              "de-DE": {
                singular: "Upload überspringen"
              },
              "fr-FR": {
                singular: "Ignorer la mise en ligne"
              },
              "ja-JP": {
                singular: "アップロードをスキップ"
              },
              "ko-KR": {
                singular: "업로드 건너뛰기"
              },
              "pt-BR": {
                singular: "Ignorar o carregamento"
              },
              "zh-CN": {
                singular: "跳过上传"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Skip account setup",
            dictionary: {
              es: {
                singular: "Omitir la configuración de la cuenta"
              },
              "de-DE": {
                singular: "Kontoeinrichtung überspringen"
              },
              "fr-FR": {
                singular: "Ignorer la configuration du compte"
              },
              "ja-JP": {
                singular: "アカウントのセットアップをスキップする"
              },
              "ko-KR": {
                singular: "계정 설정 건너뛰기"
              },
              "pt-BR": {
                singular: "Pular configuração da conta"
              },
              "zh-CN": {
                singular: "跳过帐户设置"
              }
            }
          })
        })]
      });
    },
    _v31 = _v6.default.div.withConfig({
      displayName: "Welcome__Wrapper",
      componentId: "sc-f09114f0-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`,
    _v32 = (0, _v6.default)(_v12.VimeoLogo).withConfig({
      displayName: "Welcome__VimeoLogoStyled",
      componentId: "sc-f09114f0-1"
    })`
  position: absolute;
  top: ${_v0 => _v0.shouldShiftDown ? (0, _v9.rem)(60) : (0, _v9.rem)(90)};
  width: ${(0, _v9.rem)(150)};
`,
    _v33 = _v6.default.div.withConfig({
      displayName: "Welcome__Center",
      componentId: "sc-f09114f0-2"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,
    _v34 = (0, _v6.default)(_v13.Header).withConfig({
      displayName: "Welcome__HeaderStyled",
      componentId: "sc-f09114f0-3"
    })`
  margin-bottom: ${(0, _v9.rem)(20)};
`,
    _v35 = (0, _v6.default)(_v15.Text).withConfig({
      displayName: "Welcome__Description",
      componentId: "sc-f09114f0-4"
    })`
  margin-bottom: ${(0, _v9.rem)(20)};
  font-size: ${(0, _v9.rem)(16)};
`,
    _v36 = _v6.default.div.withConfig({
      displayName: "Welcome__DescriptionBox",
      componentId: "sc-f09114f0-5"
    })`
  width: ${(0, _v9.rem)(380)};
  display: flex;
  flex-direction: column;
  text-align: center;
`,
    _v37 = (0, _v6.default)(_v11.Button).withConfig({
      displayName: "Welcome__ButtonStyled",
      componentId: "sc-f09114f0-6"
    })`
  margin-top: 1rem;
`,
    _v38 = (0, _v6.default)(_v14.Link).withConfig({
      displayName: "Welcome__SkipLink",
      componentId: "sc-f09114f0-7"
    })`
  position: absolute;
  bottom: 15vh;
`,
    _v39 = _v6.default.img.withConfig({
      displayName: "Welcome__BrandLogo",
      componentId: "sc-f09114f0-8"
    })`
  max-height: ${(0, _v9.rem)(100)};
  max-width: ${(0, _v9.rem)(150)};
  margin-bottom: ${(0, _v9.rem)(60)};
`;
  _v0.s(["WelcomePage", 0, () => {
    let {
        user: _v0
      } = (0, _v2.useContext)(_v3.ConfigContext),
      _v1 = (0, _v4.getReceiptValue)(_v4.RECEIPT_ONBOARDING_PRODUCT_NAME, !0),
      _v2 = (0, _v4.getReceiptValue)(_v4.RECEIPT_ONBOARDING_USER_EMAIL),
      _v3 = "true" === (0, _v4.getReceiptValue)(_v4.RECEIPT_ONBOARDING_HAS_GIFT),
      _v4 = (0, _v4.getReceiptValue)(_v4.RECEIPT_ONBOARDING_ORDER_ID);
    return (0, _v1.jsx)(_v30, {
      shouldShowGiftMessage: _v3,
      tierName: _v1 ?? _v4.ACCOUNT_TYPE_MAP[_v0.account],
      userEmail: _v2 ?? "",
      zuoraOrderId: _v4 ?? ""
    });
  }], 0);
}