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
  let _v17 = () => (0, _v1.jsx)(_v5.Box, {
      minH: "80vh",
      my: "3xl",
      mx: "auto",
      textAlign: "center",
      px: "lg",
      children: (0, _v1.jsxs)(_v7.Flex, {
        maxW: (0, _v15.rem)(580),
        width: "100%",
        mx: "auto",
        justifyContent: "center",
        flexDirection: "column",
        children: [(0, _v1.jsx)(_v16.CircleExclamation, {
          boxSize: "2xl",
          mx: "auto"
        }), (0, _v1.jsx)(_v14.Header, {
          size: "xl",
          color: "text-primary",
          mt: "4",
          textAlign: "center",
          letterSpacing: "normal",
          children: (0, _v10.translate)({
            singular: "Account already linked",
            dictionary: {
              es: {
                singular: "La cuenta ya está vinculada"
              },
              "de-DE": {
                singular: "Konto ist bereits verknüpft."
              },
              "fr-FR": {
                singular: "Compte déjà associé"
              },
              "ja-JP": {
                singular: "アカウントはすでにリンクされています"
              },
              "ko-KR": {
                singular: "계정이 이미 연결되어 있습니다."
              },
              "pt-BR": {
                singular: "Conta já vinculada"
              },
              "zh-CN": {
                singular: "帐户已关联"
              }
            }
          })
        }), (0, _v1.jsx)(_v3.Text, {
          mt: "md",
          fontSize: "body-md",
          fontWeight: "regular",
          display: "block",
          color: "text-secondary",
          variant: "body-xl",
          children: (0, _v10.translate)({
            singular: "Oops! It looks like you've already connected a different Vimeo account to the same Microsoft Teams account. To manage this connection, you can either switch to that account or disconnect it from Microsoft Teams and try again.",
            dictionary: {
              es: {
                singular: "¡Vaya! Parece que ya ha conectado otra cuenta de Vimeo a la misma cuenta de Microsoft Teams. Para gestionar esta conexión, puede cambiar a esa cuenta o desconectarla de Microsoft Teams y volver a intentarlo."
              },
              "de-DE": {
                singular: "Hoppla! Es sieht so aus, als hätten Sie bereits ein anderes Vimeo-Konto mit demselben Microsoft Teams-Konto verbunden. Um diese Verbindung zu verwalten, können Sie entweder zu diesem Konto wechseln oder die Verbindung zu Microsoft Teams trennen und es erneut versuchen."
              },
              "fr-FR": {
                singular: "Oups ! Il semble que vous ayez déjà connecté un autre compte Vimeo au même compte Microsoft Teams. Pour gérer cette connexion, vous pouvez soit basculer vers ce compte, soit le déconnecter de Microsoft Teams et réessayer."
              },
              "ja-JP": {
                singular: "残念ながら、すでに別のVimeoアカウントを同じMicrosoft Teamsアカウントに接続しているようです。この接続を管理するには、そのアカウントに切り替えるか、Microsoft Teamsから接続を解除して再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 이미 다른 Vimeo 계정이 동일한 Microsoft Teams 계정에 연결되어 있습니다. 연결된 계정으로 전환하거나 Microsoft Teams에서 연결을 끊고 다시 시도하여 연결된 계정을 관리할 수 있습니다."
              },
              "pt-BR": {
                singular: "Opa! Parece que você já tem uma conta diferente do Vimeo conectada à mesma conta do Microsoft Teams. Para gerenciar a conexão, você pode alternar para essa conta ou desconectá-la do Microsoft Teams e tentar novamente."
              },
              "zh-CN": {
                singular: "哎呀！看起来您已经将其他 Vimeo 帐户连接到同一 Microsoft Teams 帐户。要管理此连接，您可以切换到该帐户或将其与 Microsoft Teams 断开连接，然后重试。"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Button, {
          as: "a",
          variant: "secondary",
          size: "md",
          href: "/settings/apps",
          mx: "auto",
          mt: "lg",
          children: (0, _v10.translate)({
            singular: "Back to Connected Apps",
            dictionary: {
              es: {
                singular: "Volver a Aplicaciones en línea"
              },
              "de-DE": {
                singular: "Zurück zu Verknüpften Apps"
              },
              "fr-FR": {
                singular: "Retour aux Applications connectées"
              },
              "ja-JP": {
                singular: "接続されたアプリに戻る"
              },
              "ko-KR": {
                singular: "연결된 앱으로 돌아가기"
              },
              "pt-BR": {
                singular: "Voltar para Aplicativos Conectados"
              },
              "zh-CN": {
                singular: "返回已连接的应用程序"
              }
            }
          })
        })]
      })
    }),
    _v18 = ({
      partnerName: _v0,
      errorCode: _v1
    }) => "11" === _v1 ? (0, _v1.jsx)(_v17, {}) : "4" === _v1 ? (0, _v1.jsxs)(_v5.Box, {
      minH: "80vh",
      my: "3xl",
      mx: "auto",
      textAlign: "center",
      px: "lg",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        children: (0, _v10.translate)({
          singular: "It looks like you already have the app installed.",
          dictionary: {
            es: {
              singular: "Parece que ya tienes la aplicación instalada."
            },
            "de-DE": {
              singular: "Offensichtlich hast du bereits die App installiert."
            },
            "fr-FR": {
              singular: "Il semble que vous ayez déjà installé l'application."
            },
            "ja-JP": {
              singular: "すでにアプリがインストールされています。"
            },
            "ko-KR": {
              singular: "이미 앱이 설치되어 있는 것 같습니다."
            },
            "pt-BR": {
              singular: "Parece que você já tem o aplicativo instalado."
            },
            "zh-CN": {
              singular: "您似乎已经安装了该应用程序。"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Button, {
        size: "md",
        mx: "auto",
        my: "5",
        as: _v2.default,
        href: "/",
        rightIcon: (0, _v1.jsx)(_v8.ArrowRight, {
          width: "32px",
          boxSize: "sm"
        }),
        children: (0, _v10.translate)({
          singular: "Manage videos",
          dictionary: {
            es: {
              singular: "Gestionar videos"
            },
            "de-DE": {
              singular: "Videos verwalten"
            },
            "fr-FR": {
              singular: "Gérer les vidéos"
            },
            "ja-JP": {
              singular: "動画の管理"
            },
            "ko-KR": {
              singular: "동영상 관리"
            },
            "pt-BR": {
              singular: "Gerenciar vídeos"
            },
            "zh-CN": {
              singular: "管理视频"
            }
          }
        })
      })]
    }) : "7" === _v1 ? (0, _v1.jsxs)(_v5.Box, {
      minH: "80vh",
      my: "3xl",
      mx: "auto",
      textAlign: "center",
      px: "lg",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        children: (0, _v10.translate)({
          singular: "The Vimeo App for {partner} requires permissions granted to install.",
          replacements: {
            partner: _v0
          },
          dictionary: {
            es: {
              singular: "La aplicación de Vimeo para {partner} requiere que se otorguen permisos para su instalación."
            },
            "de-DE": {
              singular: "Die Vimeo-App für {partner} erfordert die Erteilung von Berechtigungen zur Installation."
            },
            "fr-FR": {
              singular: "L'application Vimeo pour {partner} nécessite des autorisations pour être installée."
            },
            "ja-JP": {
              singular: "{partner}のVimeoアプリをインストールするには、付与された権限が必要です。"
            },
            "ko-KR": {
              singular: "{partner}용 Vimeo 앱을 설치하려면 권한 부여가 필요합니다."
            },
            "pt-BR": {
              singular: "O aplicativo do Vimeo para{partner} requer permissões para instalação."
            },
            "zh-CN": {
              singular: "安装 Vimeo for {partner} 应用程序需要授予权限。"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Button, {
        size: "md",
        mx: "auto",
        my: "5",
        as: "a",
        href: "https://help.vimeo.com",
        rightIcon: (0, _v1.jsx)(_v8.ArrowRight, {
          width: "32px",
          boxSize: "sm"
        }),
        children: (0, _v10.translate)({
          singular: "Visit Help Center",
          dictionary: {
            es: {
              singular: "Visita el centro de ayuda"
            },
            "de-DE": {
              singular: "Zum Hilfecenter gehen"
            },
            "fr-FR": {
              singular: "Consulter le Centre d'aide"
            },
            "ja-JP": {
              singular: "ヘルプセンターへ移動"
            },
            "ko-KR": {
              singular: "도움말 센터 방문하기"
            },
            "pt-BR": {
              singular: "Acessar a Central de Ajuda"
            },
            "zh-CN": {
              singular: "访问“帮助中心”"
            }
          }
        })
      })]
    }) : (0, _v1.jsxs)(_v5.Box, {
      minH: "80vh",
      my: "3xl",
      mx: "auto",
      textAlign: "center",
      px: "lg",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        children: (0, _v10.translate)({
          singular: "Sorry, there was an unknown error.",
          dictionary: {
            es: {
              singular: "Lamentablemente se produjo un error desconocido.\n"
            },
            "de-DE": {
              singular: "Leider hat es einen unbekannten Fehler gegeben."
            },
            "fr-FR": {
              singular: "Désolé, une erreur inconnue s'est produite.\n"
            },
            "ja-JP": {
              singular: "申し訳ありません、不明なエラーが発生しました。\n"
            },
            "ko-KR": {
              singular: "죄송합니다, 알 수 없는 오류가 발생했습니다.\n"
            },
            "pt-BR": {
              singular: "Desculpe, houve um erro desconhecido."
            },
            "zh-CN": {
              singular: "抱歉，出现未知错误。"
            }
          }
        })
      }), (0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        children: (0, _v10.translate)({
          singular: "Please try again.",
          dictionary: {
            es: {
              singular: "Vuelve a intentarlo."
            },
            "de-DE": {
              singular: "Bitte versuche es nochmal."
            },
            "fr-FR": {
              singular: "Veuillez essayer à nouveau."
            },
            "ja-JP": {
              singular: "再度お試しください。"
            },
            "ko-KR": {
              singular: "다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "请重试。"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Button, {
        size: "md",
        mx: "auto",
        my: "5",
        as: "a",
        href: "https://help.vimeo.com",
        rightIcon: (0, _v1.jsx)(_v8.ArrowRight, {
          width: "xs",
          height: "xs"
        }),
        children: (0, _v10.translate)({
          singular: "Visit Help Center",
          dictionary: {
            es: {
              singular: "Visita el centro de ayuda"
            },
            "de-DE": {
              singular: "Zum Hilfecenter gehen"
            },
            "fr-FR": {
              singular: "Consulter le Centre d'aide"
            },
            "ja-JP": {
              singular: "ヘルプセンターへ移動"
            },
            "ko-KR": {
              singular: "도움말 센터 방문하기"
            },
            "pt-BR": {
              singular: "Acessar a Central de Ajuda"
            },
            "zh-CN": {
              singular: "访问“帮助中心”"
            }
          }
        })
      }), (0, _v1.jsx)(_v7.Flex, {
        mx: "auto",
        justify: "center",
        children: (0, _v1.jsx)(_v6.Link, {
          href: "/",
          children: (0, _v10.translate)({
            singular: "Manage videos",
            dictionary: {
              es: {
                singular: "Gestionar videos"
              },
              "de-DE": {
                singular: "Videos verwalten"
              },
              "fr-FR": {
                singular: "Gérer les vidéos"
              },
              "ja-JP": {
                singular: "動画の管理"
              },
              "ko-KR": {
                singular: "동영상 관리"
              },
              "pt-BR": {
                singular: "Gerenciar vídeos"
              },
              "zh-CN": {
                singular: "管理视频"
              }
            }
          })
        })
      })]
    });
  (0, _v9.withPageSetup)(_v0 => {
    let _v1 = Number(_v0.params?.appId),
      _v2 = _v13.PARTNER_CONFIG[_v1];
    if (!_v2) return {
      notFound: !0
    };
    let {
      name: _v3
    } = _v2;
    return {
      props: {
        partnerName: _v3,
        errorCode: _v0.query?.c
      }
    };
  }), _v18.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v11.HeaderLayout, {}), _v0, (0, _v1.jsx)(_v12.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v18], 0);
}