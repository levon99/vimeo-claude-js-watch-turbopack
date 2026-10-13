{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v0 => (0, _v1.jsx)(_v8.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M14.36 14.23a3.76 3.76 0 0 1-4.72 0 1.001 1.001 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1.001 1.001 0 0 0-1.28-1.54ZM10.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15 9h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2Zm-3-7a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z",
      fill: "currentColor"
    })
  });
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
    title: _v0,
    description: _v1,
    children: _v2,
    icon: _v3,
    buttonProps: _v4,
    buttonText: _v5
  }) => (0, _v1.jsx)(_v13.VStack, {
    align: "center",
    flexGrow: "1",
    pt: "10%",
    width: "100%",
    children: (0, _v1.jsxs)(_v13.VStack, {
      gap: "500",
      height: "100%",
      width: "100%",
      children: [_v3, (0, _v1.jsxs)(_v13.VStack, {
        gap: "200",
        maxW: "60%",
        children: [(0, _v1.jsx)(_v11.Header, {
          align: "center",
          size: "lg",
          children: _v0
        }), (0, _v1.jsx)(_v12.Paragraph, {
          size: "lg",
          align: "center",
          color: "text-secondary",
          children: _v1
        })]
      }), _v2 ?? null, _v4 && (0, _v1.jsx)(_v14.HStack, {
        gap: "100",
        children: (0, _v1.jsx)(_v10.Button, {
          onClick: _v4.onClick,
          size: "md",
          variant: "secondary",
          ..._v4,
          children: _v5
        })
      })]
    })
  });
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = {
    authComplete: {
      title: (0, _v18.translate)({
        singular: "You’re logged in",
        dictionary: {
          es: {
            singular: "Ha iniciado sesión"
          },
          "de-DE": {
            singular: "Sie sind angemeldet"
          },
          "fr-FR": {
            singular: "Vous êtes connecté(e)"
          },
          "ja-JP": {
            singular: "ログインしています"
          },
          "ko-KR": {
            singular: "로그인했습니다."
          },
          "pt-BR": {
            singular: "Sua conta está logada"
          },
          "zh-CN": {
            singular: "您已登录"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "Vimeo Record is ready to use. You can close this tab.",
        dictionary: {
          es: {
            singular: "Vimeo Record está listo para usar. Puede cerrar esta pestaña."
          },
          "de-DE": {
            singular: "Vimeo Record ist bereit für die Verwendung. Sie können diesen Tab schließen."
          },
          "fr-FR": {
            singular: "Vimeo Record est prêt à être utilisé. Vous pouvez fermer cet onglet."
          },
          "ja-JP": {
            singular: "Vimeo Recordを使用する準備が整いました。このタブを閉じることができます。"
          },
          "ko-KR": {
            singular: "Vimeo Record를 사용할 준비가 되었습니다. 이제 이 탭을 닫아도 됩니다."
          },
          "pt-BR": {
            singular: "O Vimeo Record está pronto para ser usado. Você já pode fechar esta aba."
          },
          "zh-CN": {
            singular: "现已可以使用 Vimeo Record。可以关闭此选项卡。"
          }
        }
      })
    },
    authFailed: {
      title: (0, _v18.translate)({
        singular: "Allow access to continue",
        dictionary: {
          es: {
            singular: "Permita el acceso para continuar"
          },
          "de-DE": {
            singular: "Erlauben Sie den Zugriff, um fortzufahren"
          },
          "fr-FR": {
            singular: "Autorisez l'accès pour continuer"
          },
          "ja-JP": {
            singular: "アクセスを許可して続行"
          },
          "ko-KR": {
            singular: "계속하려면 액세스 권한을 허용하세요."
          },
          "pt-BR": {
            singular: "Permitir acesso para continuar"
          },
          "zh-CN": {
            singular: "允许继续访问"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "Vimeo Record needs access to your Vimeo account. Close this tab and try again.",
        dictionary: {
          es: {
            singular: "Vimeo Record necesita acceder a su cuenta de Vimeo. Cierre esta pestaña y vuelva a intentarlo."
          },
          "de-DE": {
            singular: "Vimeo Record benötigt Zugriff auf Ihr Vimeo-Konto. Schließen Sie diesen Tab und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Vimeo Record a besoin d'accéder à votre compte Vimeo. Fermez cet onglet et réessayez."
          },
          "ja-JP": {
            singular: "Vimeo RecordにはVimeoアカウントへのアクセスが必要です。このタブを閉じて、もう一度お試しください。"
          },
          "ko-KR": {
            singular: "Vimeo Record에서 회원님의 Vimeo 계정에 액세스해야 합니다. 이 탭을 닫고 다시 시도하세요."
          },
          "pt-BR": {
            singular: "O Vimeo Record precisa de acesso à sua conta do Vimeo. Feche esta aba e tente novamente."
          },
          "zh-CN": {
            singular: "Vimeo Record 需要访问您的 Vimeo 帐户。关闭此选项卡，然后重试。"
          }
        }
      })
    },
    authError: {
      title: (0, _v18.translate)({
        singular: "Allow access to continue",
        dictionary: {
          es: {
            singular: "Permita el acceso para continuar"
          },
          "de-DE": {
            singular: "Erlauben Sie den Zugriff, um fortzufahren"
          },
          "fr-FR": {
            singular: "Autorisez l'accès pour continuer"
          },
          "ja-JP": {
            singular: "アクセスを許可して続行"
          },
          "ko-KR": {
            singular: "계속하려면 액세스 권한을 허용하세요."
          },
          "pt-BR": {
            singular: "Permitir acesso para continuar"
          },
          "zh-CN": {
            singular: "允许继续访问"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "Vimeo Record needs access to your Vimeo account. Close this tab and try again.",
        dictionary: {
          es: {
            singular: "Vimeo Record necesita acceder a su cuenta de Vimeo. Cierre esta pestaña y vuelva a intentarlo."
          },
          "de-DE": {
            singular: "Vimeo Record benötigt Zugriff auf Ihr Vimeo-Konto. Schließen Sie diesen Tab und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Vimeo Record a besoin d'accéder à votre compte Vimeo. Fermez cet onglet et réessayez."
          },
          "ja-JP": {
            singular: "Vimeo RecordにはVimeoアカウントへのアクセスが必要です。このタブを閉じて、もう一度お試しください。"
          },
          "ko-KR": {
            singular: "Vimeo Record에서 회원님의 Vimeo 계정에 액세스해야 합니다. 이 탭을 닫고 다시 시도하세요."
          },
          "pt-BR": {
            singular: "O Vimeo Record precisa de acesso à sua conta do Vimeo. Feche esta aba e tente novamente."
          },
          "zh-CN": {
            singular: "Vimeo Record 需要访问您的 Vimeo 帐户。关闭此选项卡，然后重试。"
          }
        }
      })
    },
    postUninstall: _v0 => "default" === _v0 ? {
      title: (0, _v18.translate)({
        singular: "How can we improve?",
        dictionary: {
          es: {
            singular: "¿Cómo podemos mejorar?"
          },
          "de-DE": {
            singular: "Wie können wir es besser machen?"
          },
          "fr-FR": {
            singular: "Comment pouvons-nous faire mieux ?"
          },
          "ja-JP": {
            singular: "改善点をお知らせください。"
          },
          "ko-KR": {
            singular: "어떤 점을 개선할까요?"
          },
          "pt-BR": {
            singular: "Como podemos melhorar?"
          },
          "zh-CN": {
            singular: "我们可以如何改进？"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "Your feedback makes a difference. Help us improve Vimeo Record.",
        dictionary: {
          es: {
            singular: "Sus comentarios marcan la diferencia. Ayúdenos a mejorar Vimeo Record."
          },
          "de-DE": {
            singular: "Dein Feedback kann einen wahren Unterschied machen. Helfen Sie uns, Vimeo Record zu verbessern."
          },
          "fr-FR": {
            singular: "Vos commentaires font toute la différence. Aidez-nous à améliorer Vimeo Record."
          },
          "ja-JP": {
            singular: "ユーザーの皆様のフィードバックは大変重要です。Vimeo Recordの改善にご協力ください。"
          },
          "ko-KR": {
            singular: "회원님의 의견이 변화를 만듭니다. Vimeo Record 개선에 참여해 주세요."
          },
          "pt-BR": {
            singular: "Seu feedback faz a diferença. Ajude-nos a melhorar o Vimeo Record."
          },
          "zh-CN": {
            singular: "您的反馈至关重要。帮助我们改进 Vimeo Record。"
          }
        }
      }),
      buttonText: (0, _v18.translate)({
        singular: "Submit feedback",
        dictionary: {
          es: {
            singular: "Enviar comentarios"
          },
          "de-DE": {
            singular: "Feedback abgeben"
          },
          "fr-FR": {
            singular: "Envoyez vos commentaires"
          },
          "ja-JP": {
            singular: "フィードバックを送信"
          },
          "ko-KR": {
            singular: "피드백 제출"
          },
          "pt-BR": {
            singular: "Enviar feedback"
          },
          "zh-CN": {
            singular: "提交反馈"
          }
        }
      })
    } : {
      title: (0, _v18.translate)({
        singular: "Thanks for the feedback",
        dictionary: {
          es: {
            singular: "Gracias por sus comentarios"
          },
          "de-DE": {
            singular: "Danke für das Feedback"
          },
          "fr-FR": {
            singular: "Merci pour vos commentaires !"
          },
          "ja-JP": {
            singular: "フィードバックをありがとうございます"
          },
          "ko-KR": {
            singular: "피드백을 남겨주셔서 감사합니다."
          },
          "pt-BR": {
            singular: "Agradecemos o feedback"
          },
          "zh-CN": {
            singular: "感谢您的反馈"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "We’re committed to building the highest quality video tools on the internet. {LINE_BREAK}Come back soon to see the latest improvements.",
        replacements: {
          LINE_BREAK: () => (0, _v1.jsx)("br", {}, "line-brk")
        },
        dictionary: {
          es: {
            singular: "Tenemos el compromiso de desarrollar las mejores herramientas de video de Internet. {LINE_BREAK}Vuelva pronto para ver las últimas mejoras."
          },
          "de-DE": {
            singular: "Wir haben es uns zum Ziel gesetzt, die hochwertigsten Video-Tools zu entwickeln, die das Internet zu bieten hat. {LINE_BREAK}Kommen Sie bald wieder, um die neuesten Verbesserungen zu sehen."
          },
          "fr-FR": {
            singular: "Nous nous engageons à concevoir des outils vidéo d'une qualité optimale sur Internet. {LINE_BREAK}Revenez bientôt pour découvrir nos dernières améliorations !"
          },
          "ja-JP": {
            singular: "Vimeoはインターネット上で最高画質の動画ツールを構築することに尽力しています。{LINE_BREAK}後日、最新の改善点をご確認ください。"
          },
          "ko-KR": {
            singular: "우리는 인터넷 최고 품질의 동영상 도구를 만드는 데 노력을 기울입니다. {LINE_BREAK}곧 다시 방문하여 최근 개선 사항을 확인하세요."
          },
          "pt-BR": {
            singular: "Temos o compromisso de criar ferramentas de vídeo da mais alta qualidade na internet. {LINE_BREAK}Volte em breve para descobrir nossas últimas melhorias."
          },
          "zh-CN": {
            singular: "我们致力于打造互联网上最优质的视频工具。{LINE_BREAK}请尽快回来查看最新改进功能。"
          }
        }
      }),
      buttonText: (0, _v18.translate)({
        singular: "Back to homepage",
        dictionary: {
          es: {
            singular: "Volver a la página de inicio"
          },
          "de-DE": {
            singular: "Zurück zur Startseite"
          },
          "fr-FR": {
            singular: "Retour à la page d'accueil"
          },
          "ja-JP": {
            singular: "ホームページに戻る"
          },
          "ko-KR": {
            singular: "홈페이지로 돌아가기"
          },
          "pt-BR": {
            singular: "Voltar à página inicial"
          },
          "zh-CN": {
            singular: "返回主页"
          }
        }
      })
    },
    readyToLaunch: {
      title: (0, _v18.translate)({
        singular: "Opening Vimeo Record...",
        dictionary: {
          es: {
            singular: "Abriendo Vimeo Record..."
          },
          "de-DE": {
            singular: "Vimeo-Datensatz wird geöffnet..."
          },
          "fr-FR": {
            singular: "Ouverture de Vimeo Record…"
          },
          "ja-JP": {
            singular: "Vimeo Recordを開いています..."
          },
          "ko-KR": {
            singular: "Vimeo Record 실행 중..."
          },
          "pt-BR": {
            singular: "Abrindo o Vimeo Record..."
          },
          "zh-CN": {
            singular: "正在打开 Vimeo Record……"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "Once the desktop app opens, you can close this tab. {LINE_BREAK}If it doesn't, select Open Vimeo Record.",
        replacements: {
          LINE_BREAK: () => (0, _v1.jsx)("br", {}, "line-brk")
        },
        dictionary: {
          es: {
            singular: "Una vez que se abra la aplicación de escritorio, puede cerrar esta pestaña. {LINE_BREAK}Si no se abre, seleccione Abrir Vimeo Record."
          },
          "de-DE": {
            singular: "Sobald die Desktop-App geöffnet ist, können Sie diesen Tab schließen. {LINE_BREAK}Wenn dies nicht der Fall ist, wählen Sie Vimeo Record Datenschutz öffnen ."
          },
          "fr-FR": {
            singular: "Une fois l'application de bureau ouverte, vous pouvez fermer cet onglet. {LINE_BREAK}Dans le cas contraire, sélectionnez Ouvrir Vimeo Record."
          },
          "ja-JP": {
            singular: "デスクトップアプリが開いたら、このタブを閉じることができます。{LINE_BREAK}開かない場合は「Vimeo Recordを開く」を選択してください。"
          },
          "ko-KR": {
            singular: "데스크톱 앱이 열리면 이 탭을 닫아도 됩니다. {LINE_BREAK}열리지 않을 경우 Vimeo Record 열기를 선택하세요."
          },
          "pt-BR": {
            singular: "Quando o aplicativo de desktop abrir, você pode fechar esta aba. {LINE_BREAK}Caso contrário, selecione Abrir Vimeo Record."
          },
          "zh-CN": {
            singular: "打开桌面应用程序后，可以关闭此选项卡。{LINE_BREAK}若未打开该应用程序，请选择“Open Vimeo Record”（打开 Vimeo Record）。"
          }
        }
      }),
      buttonText: (0, _v18.translate)({
        singular: "Open Vimeo Record",
        dictionary: {
          es: {
            singular: "Abrir Vimeo Record"
          },
          "de-DE": {
            singular: "Vimeo Record öffnen"
          },
          "fr-FR": {
            singular: "Ouvrir Vimeo Record"
          },
          "ja-JP": {
            singular: "Vimeo Recordを開く"
          },
          "ko-KR": {
            singular: "Vimeo Record 실행"
          },
          "pt-BR": {
            singular: "Abrir o Vimeo Record"
          },
          "zh-CN": {
            singular: "打开 Vimeo Record"
          }
        }
      })
    },
    redirectingToRecord: {
      title: (0, _v18.translate)({
        singular: "Opening Vimeo Record...",
        dictionary: {
          es: {
            singular: "Abriendo Vimeo Record..."
          },
          "de-DE": {
            singular: "Vimeo-Datensatz wird geöffnet..."
          },
          "fr-FR": {
            singular: "Ouverture de Vimeo Record…"
          },
          "ja-JP": {
            singular: "Vimeo Recordを開いています..."
          },
          "ko-KR": {
            singular: "Vimeo Record 실행 중..."
          },
          "pt-BR": {
            singular: "Abrindo o Vimeo Record..."
          },
          "zh-CN": {
            singular: "正在打开 Vimeo Record……"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "Once the desktop app opens, you can close this tab. {LINE_BREAK}If it doesn't, select Open Vimeo Record.",
        replacements: {
          LINE_BREAK: () => (0, _v1.jsx)("br", {}, "line-brk")
        },
        dictionary: {
          es: {
            singular: "Una vez que se abra la aplicación de escritorio, puede cerrar esta pestaña. {LINE_BREAK}Si no se abre, seleccione Abrir Vimeo Record."
          },
          "de-DE": {
            singular: "Sobald die Desktop-App geöffnet ist, können Sie diesen Tab schließen. {LINE_BREAK}Wenn dies nicht der Fall ist, wählen Sie Vimeo Record Datenschutz öffnen ."
          },
          "fr-FR": {
            singular: "Une fois l'application de bureau ouverte, vous pouvez fermer cet onglet. {LINE_BREAK}Dans le cas contraire, sélectionnez Ouvrir Vimeo Record."
          },
          "ja-JP": {
            singular: "デスクトップアプリが開いたら、このタブを閉じることができます。{LINE_BREAK}開かない場合は「Vimeo Recordを開く」を選択してください。"
          },
          "ko-KR": {
            singular: "데스크톱 앱이 열리면 이 탭을 닫아도 됩니다. {LINE_BREAK}열리지 않을 경우 Vimeo Record 열기를 선택하세요."
          },
          "pt-BR": {
            singular: "Quando o aplicativo de desktop abrir, você pode fechar esta aba. {LINE_BREAK}Caso contrário, selecione Abrir Vimeo Record."
          },
          "zh-CN": {
            singular: "打开桌面应用程序后，可以关闭此选项卡。{LINE_BREAK}若未打开该应用程序，请选择“Open Vimeo Record”（打开 Vimeo Record）。"
          }
        }
      }),
      buttonText: (0, _v18.translate)({
        singular: "Open Vimeo Record",
        dictionary: {
          es: {
            singular: "Abrir Vimeo Record"
          },
          "de-DE": {
            singular: "Vimeo Record öffnen"
          },
          "fr-FR": {
            singular: "Ouvrir Vimeo Record"
          },
          "ja-JP": {
            singular: "Vimeo Recordを開く"
          },
          "ko-KR": {
            singular: "Vimeo Record 실행"
          },
          "pt-BR": {
            singular: "Abrir o Vimeo Record"
          },
          "zh-CN": {
            singular: "打开 Vimeo Record"
          }
        }
      })
    },
    thankYou: {
      title: (0, _v18.translate)({
        singular: "Check your email to start recording",
        dictionary: {
          es: {
            singular: "Consulte su correo electrónico para comenzar a grabar"
          },
          "de-DE": {
            singular: "Überprüfe deine E-Mails, um eine Aufnahme zu beginnen."
          },
          "fr-FR": {
            singular: "Consultez votre boîte de réception pour commencer à enregistrer"
          },
          "ja-JP": {
            singular: "録画を開始するにはメールをご確認ください"
          },
          "ko-KR": {
            singular: "녹화를 시작하려면 이메일을 확인하세요."
          },
          "pt-BR": {
            singular: "Verifique seu e-mail para começar a gravar"
          },
          "zh-CN": {
            singular: "检查您的电子邮件以开始录制"
          }
        }
      }),
      description: (0, _v18.translate)({
        singular: "To use Vimeo Record, open the link we sent to {LINE_BREAK}the email address associated with your Vimeo account",
        replacements: {
          LINE_BREAK: () => (0, _v1.jsx)("br", {}, "line-brk")
        },
        dictionary: {
          es: {
            singular: "Para utilizar Vimeo Record, abra el enlace que le enviamos a {LINE_BREAK}la dirección de correo electrónico asociada a su cuenta de Vimeo"
          },
          "de-DE": {
            singular: "Um Vimeo Record zu verwenden, öffnen Sie den Link, den wir an {LINE_BREAK}die mit Ihrem Vimeo-Konto verbundene E-Mail-Adresse gesendet haben"
          },
          "fr-FR": {
            singular: "Pour utiliser Vimeo Record, ouvrez le lien que nous avons envoyé à {LINE_BREAK}l'adresse e-mail associée à votre compte Vimeo"
          },
          "ja-JP": {
            singular: "Vimeo Recordを使用するには、Vimeoアカウントに関連付けられたメールアドレスに{LINE_BREAK}送信されたリンクを開いてください"
          },
          "ko-KR": {
            singular: "Vimeo Record를 사용하려면 Vimeo 계정과 연결된 {LINE_BREAK}이메일 주소로 발송된 링크를 여세요."
          },
          "pt-BR": {
            singular: "Para usar o Vimeo Record, abra o link que enviamos para {LINE_BREAK}o endereço de e-mail associado à sua conta do Vimeo"
          },
          "zh-CN": {
            singular: "要使用 Vimeo Record，请打开我们发送至 {LINE_BREAK} 的链接，即与您的 Vimeo 账户关联的电子邮件地址"
          }
        }
      })
    }
  };
  _v0.s(["RecordPageBase", 0, ({
    pageType: _v0,
    children: _v1,
    handleButtonClick: _v2,
    isButtonDisabled: _v3,
    pageState: _v4 = "default"
  }) => {
    let _v5 = _v19[_v0],
      _v6 = "function" == typeof _v5 ? _v5(_v4) : _v5,
      _v7 = _v6.buttonText,
      _v8 = (0, _v2.useMemo)(() => {
        switch (_v0) {
          case "authComplete":
          case "readyToLaunch":
          case "thankYou":
            return (0, _v1.jsx)(_v6.Record, {
              boxSize: (0, _v5.rem)(80)
            });
          case "authError":
          case "authFailed":
            return (0, _v1.jsx)(_v7.InfoCircle, {
              boxSize: (0, _v5.rem)(80)
            });
          case "postUninstall":
            return (0, _v1.jsx)(_v9, {
              boxSize: (0, _v5.rem)(80)
            });
          case "redirectingToRecord":
            return (0, _v1.jsx)(_v3.Spinner, {
              size: "lg"
            });
          default:
            return null;
        }
      }, [_v0]),
      _v9 = (0, _v2.useMemo)(() => {
        let _v0 = function () {
          switch (_v0) {
            case "authError":
            case "authFailed":
            case "authComplete":
            case "thankYou":
              return null;
            case "redirectingToRecord":
              return {
                "data-screen-recorder-cta": !0,
                variant: "secondary",
                isDisabled: _v3
              };
            case "postUninstall":
              return {
                variant: "primary",
                isDisabled: _v3
              };
            default:
              return {
                isDisabled: _v3
              };
          }
        }();
        return _v0 && _v7 ? {
          onClick: _v2,
          children: _v7,
          ..._v0
        } : void 0;
      }, [_v7, _v2, _v0, _v3]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v17.RecordNavBar, {}), (0, _v1.jsx)(_v4.Flex, {
        flexDirection: "column",
        flexGrow: "1",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "background",
        children: (0, _v1.jsx)(_v15, {
          ..._v6,
          icon: _v8,
          buttonProps: _v9,
          children: _v1
        })
      }), (0, _v1.jsx)(_v16.RecordFooter, {})]
    });
  }], 0);
}