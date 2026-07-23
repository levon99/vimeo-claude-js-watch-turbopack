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
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23({
    partnerIntegrationId: _v0
  }) {
    let _v1 = (0, _v2.useRouter)(),
      _v2 = (0, _v3.useContext)(_v20.ViewerContext),
      {
        xsrft: _v3
      } = _v2 || {},
      [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(!1),
      _v8 = _v21.APP_CONFIG[_v0],
      {
        data: _v9,
        isLoading: _v10
      } = (0, _v16.useGetUserIntegration)(() => _v2?.user?.id && _v0 && _v8?.connect?.showTerms ? {
        where: {
          userId: String(_v2.user.id),
          integrationUuid: _v0
        },
        select: ["displayName", "thumbnailUrl"]
      } : null);
    return _v8?.connect?.showTerms ? _v10 ? (0, _v1.jsx)(_v19.default, {}) : (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      justifyContent: "center",
      height: {
        md: "90vh"
      },
      children: (0, _v1.jsxs)(_v7.Card, {
        padding: "xl",
        width: (0, _v12.rem)(420),
        children: [(0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          justifyContent: "center",
          children: [(0, _v1.jsx)(_v10.Image, {
            src: _v9?.thumbnailUrl || _v22.DEFAULT_THUMBNAIL_URL,
            alt: "logo",
            boxSize: "100%",
            height: "md",
            width: "md"
          }), (0, _v1.jsx)(_v13.ArrowsIntegration, {
            mx: "3"
          }), (0, _v1.jsx)(_v14.Vimeo, {
            width: "lg",
            height: "lg"
          })]
        }), (0, _v1.jsx)(_v9.Header, {
          size: "lg",
          textAlign: "center",
          margin: "lg",
          children: _v9?.displayName && (0, _v17.translate)({
            singular: "Connect to {NAME}",
            replacements: {
              NAME: _v9.displayName
            },
            dictionary: {
              es: {
                singular: "Conectar a {NAME}"
              },
              "de-DE": {
                singular: "Stelle eine Verbindung her mit {NAME}"
              },
              "fr-FR": {
                singular: "Connecter à {NAME}"
              },
              "ja-JP": {
                singular: "{NAME}と接続する"
              },
              "ko-KR": {
                singular: "{NAME}에 연결"
              },
              "pt-BR": {
                singular: "Conectar com o {NAME}"
              },
              "zh-CN": {
                singular: "连接到 {NAME}"
              }
            }
          })
        }), _v6 && (0, _v1.jsx)(_v4.Alert, {
          status: "error",
          mb: "md",
          onClose: () => _v7(!1),
          children: (0, _v17.translate)({
            singular: "Unable to connect your accounts",
            dictionary: {
              es: {
                singular: "No se pudieron conectar tus cuentas"
              },
              "de-DE": {
                singular: "Deine Konten können derzeit nicht verknüpft werden"
              },
              "fr-FR": {
                singular: "Impossible de connecter vos comptes"
              },
              "ja-JP": {
                singular: "アカウントを接続することができませんでした"
              },
              "ko-KR": {
                singular: "계정 연결 실패"
              },
              "pt-BR": {
                singular: "Não é possível conectar suas contas"
              },
              "zh-CN": {
                singular: "无法连接您的帐户"
              }
            }
          })
        }), (0, _v1.jsx)(_v11.Text, {
          variant: "body-lg",
          children: (0, _v17.translate)({
            singular: 'By clicking "continue" below and connecting with this email service provider, you are agreeing to the following terms:',
            dictionary: {
              es: {
                singular: 'Al hacer clic en el botón "continuar" que aparece a continuación y al conectarse con este proveedor de servicios de correo electrónico, usted acepta los siguientes términos:'
              },
              "de-DE": {
                singular: "Wenn Sie unten auf den Button „Weiter“ klicken und diese Datei herunterladen, stimmen Sie den folgenden Bedingungen zu:"
              },
              "fr-FR": {
                singular: "En cliquant sur « continuer » ci-dessous et en vous connectant à ce fournisseur de service de messagerie, vous acceptez les conditions suivantes :"
              },
              "ja-JP": {
                singular: "下の「続ける」をクリックしてこのEメールサービスプロバイダーと接続すると、次の条件に同意したことになります。"
              },
              "ko-KR": {
                singular: "아래 '계속'을 클릭하여 이메일 서비스 제공업체에 연결하시면 다음 약관에 동의하는 것으로 간주됩니다."
              },
              "pt-BR": {
                singular: 'Ao clicar em "Continuar" abaixo e se conectar com esse provedor de serviços de e-mail, você está concordando com os seguintes termos:'
              },
              "zh-CN": {
                singular: "点击下面的“继续”按钮，并与此电子邮件服务提供商关联，即表示您同意以下条款："
              }
            }
          })
        }), (0, _v1.jsxs)(_v5.Box, {
          as: "ul",
          listStyleType: "disc",
          py: "lg",
          pl: "xl",
          pr: "sm",
          fontSize: "body-lg",
          children: [(0, _v1.jsx)("li", {
            children: (0, _v17.translate)({
              singular: "I will only use collected email addresses for marketing purposes.",
              dictionary: {
                es: {
                  singular: "Solo usaré las direcciones de correo electrónico recopiladas para hacer marketing."
                },
                "de-DE": {
                  singular: "Ich werde nur mir zur Verfügung gestellte E-Mail-Adressen zu Marketingzwecken nutzen."
                },
                "fr-FR": {
                  singular: "J'utiliserai ces adresses e-mail collectées à des fins de marketing uniquement."
                },
                "ja-JP": {
                  singular: "これらの取得したメールアドレスはマーケティングを目的としたもののみに使用します。"
                },
                "ko-KR": {
                  singular: "수집된 이메일 주소는 마케팅 용도로만 사용할 것입니다."
                },
                "pt-BR": {
                  singular: "Eu somente usarei endereços de e-mail coletados para fins de marketing."
                },
                "zh-CN": {
                  singular: "我只会将收集到的电子邮件地址用于营销目的。"
                }
              }
            })
          }), (0, _v1.jsx)("li", {
            children: (0, _v17.translate)({
              singular: "I will not share these email addresses with others.",
              dictionary: {
                es: {
                  singular: "No compartiré estas direcciones de correo electrónico con terceros."
                },
                "de-DE": {
                  singular: "Ich werde diese E-Mail-Adressen nicht mit anderen teilen."
                },
                "fr-FR": {
                  singular: "Je ne partagerai pas ces adresses e-mail avec des tiers."
                },
                "ja-JP": {
                  singular: "これらのメールアドレスを他者と共有しません。"
                },
                "ko-KR": {
                  singular: "이 이메일 주소를 다른 사람과 공유하지 않을 것입니다."
                },
                "pt-BR": {
                  singular: "Não compartilharei esses endereços de e-mail com outras pessoas."
                },
                "zh-CN": {
                  singular: "我不会与他人分享这些电子邮件地址。"
                }
              }
            })
          }), (0, _v1.jsx)("li", {
            children: (0, _v17.translate)({
              singular: "I will comply with CAN-SPAM, CASL, and any other applicable laws.",
              dictionary: {
                es: {
                  singular: "Cumpliré con las leyes CAN-SPAM y CASL así como con cualquier otra ley aplicable."
                },
                "de-DE": {
                  singular: "Ich halte mich an CAN-SPAM, CASL und alle weiteren anwendbaren Gesetze."
                },
                "fr-FR": {
                  singular: "Je respecterai la loi CAN-SPAM, la loi CASL et toutes autres lois applicables."
                },
                "ja-JP": {
                  singular: "CAN-SPAM、CASL、およびその他の該当する法律を遵守します。"
                },
                "ko-KR": {
                  singular: "CAN-SPAM, CASL 및 기타 관련 법규를 준수할 것입니다."
                },
                "pt-BR": {
                  singular: "Cumprirei a CAN-SPAM, CASL e todas as outras leis aplicáveis."
                },
                "zh-CN": {
                  singular: "我将遵守 CAN-SPAM、CASL 和任何其他适用法律。"
                }
              }
            })
          }), (0, _v1.jsx)("li", {
            children: (0, _v17.translate)({
              singular: "I will provide an unsubscribe mechanism and comply promptly with opt-out requests.",
              dictionary: {
                es: {
                  singular: "Proporcionaré un mecanismo para darse de baja y tramitaré de inmediato las solicitudes de baja voluntaria."
                },
                "de-DE": {
                  singular: "Ich werde einen Abmelde-Mechanismus bereitstellen und Opt-Out-Anfragen umgehend nachkommen."
                },
                "fr-FR": {
                  singular: "Je mettrai en place un dispositif de désinscription et répondrai rapidement aux demandes de désabonnement."
                },
                "ja-JP": {
                  singular: "配信解除の方法を提供し、オプトアウトの要求に迅速に応じます。"
                },
                "ko-KR": {
                  singular: "수신 거부 방법을 기재하고 수신 거부 요청에 즉시 응할 것입니다."
                },
                "pt-BR": {
                  singular: "Fornecerei um mecanismo de cancelamento de assinatura e atenderei prontamente a todos as solicitações de opt-out."
                },
                "zh-CN": {
                  singular: "我将提供退订机制，并及时满足退订请求。"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v6.Button, {
          variant: "primary",
          mt: "sm",
          isLoading: _v4,
          onClick: () => {
            if (!_v8?.connect?.showTerms) return;
            _v7(!1), _v5(!0);
            let _v0 = _v8.connect.url;
            fetch("/settings?action=captured_emails_agreement", {
              method: "POST",
              body: JSON.stringify({
                email_service_agreement: _v0.split("/").pop(),
                token: _v3
              }),
              headers: {
                "Content-type": "application/json"
              }
            }).then(_v0 => _v0.json()).then(_v0 => {
              _v0.success && _v1.push(_v0);
            }).catch(_v0 => {
              _v7(!0), console.error(_v0);
            }).finally(() => {
              _v5(!1);
            });
          },
          children: (0, _v17.translate)({
            singular: "Allow",
            dictionary: {
              es: {
                singular: "Permitir"
              },
              "de-DE": {
                singular: "Erlauben"
              },
              "fr-FR": {
                singular: "Autoriser"
              },
              "ja-JP": {
                singular: "許可する"
              },
              "ko-KR": {
                singular: "허용"
              },
              "pt-BR": {
                singular: "Permitir"
              },
              "zh-CN": {
                singular: "允许"
              }
            }
          })
        }), (0, _v1.jsx)(_v6.Button, {
          variant: "tertiary",
          mt: "sm",
          onClick: () => _v1.push(`/integrations-center/${_v0}/details`),
          children: (0, _v17.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        })]
      })
    }) : (0, _v1.jsx)(_v18.ErrorPage, {
      error: new _v15.ResourceNotFoundError()
    });
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = _v0?.query?.partnerIntegrationId;
    return _v1 ? (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v23, {
        partnerIntegrationId: _v1
      })
    }) : (0, _v1.jsx)(_v19.default, {});
  };
  (0, _v24.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    capability: "hasIntegrationCenter",
    redirect: "/settings/apps",
    inlineViewer: !0,
    noIndex: !0
  }), _v27.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v25.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v26.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v27], 0);
}