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
    _v19 = _v0.i(0);
  let _v20 = _v5.object({
      email: _v5.string().email((0, _v8.translate)({
        singular: "Please enter a valid email address",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an"
          },
          "fr-FR": {
            singular: "Veuillez saisir une adresse e-mail valide"
          },
          "ja-JP": {
            singular: "正しいメールアドレスを入力してください"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido"
          },
          "zh-CN": {
            singular: "请输入有效的电子邮件地址"
          }
        }
      })).required((0, _v8.translate)({
        singular: "Please enter a valid email address",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an"
          },
          "fr-FR": {
            singular: "Veuillez saisir une adresse e-mail valide"
          },
          "ja-JP": {
            singular: "正しいメールアドレスを入力してください"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido"
          },
          "zh-CN": {
            singular: "请输入有效的电子邮件地址"
          }
        }
      })),
      password: _v5.string().required((0, _v8.translate)({
        singular: "Please enter your password",
        dictionary: {
          es: {
            singular: "Introduce tu contraseña."
          },
          "de-DE": {
            singular: "Bitte gib dein Kennwort ein"
          },
          "fr-FR": {
            singular: "Veuillez saisir votre mot de passe"
          },
          "ja-JP": {
            singular: "パスワードを入力してください"
          },
          "ko-KR": {
            singular: "비밀번호를 입력하세요"
          },
          "pt-BR": {
            singular: "Por favor, digite sua senha"
          },
          "zh-CN": {
            singular: "请输入密码"
          }
        }
      })),
      isOtp: _v5.boolean(),
      otp: _v5.string().when("isOtp", {
        is: _v0 => !0 === _v0,
        then: _v5.string().required((0, _v8.translate)({
          singular: "Invalid code, please try again",
          dictionary: {
            es: {
              singular: "Código no válido. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Ungültiger Code, bitte versuche es erneut."
            },
            "fr-FR": {
              singular: "Code non valide, veuillez réessayer"
            },
            "ja-JP": {
              singular: "無効なコードです、再試行してください"
            },
            "ko-KR": {
              singular: "유효하지 않은 코드, 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Código inválido, por favor, tente novamente"
            },
            "zh-CN": {
              singular: "代码无效，请重试"
            }
          }
        })).matches(/^\d+$/, (0, _v8.translate)({
          singular: "Invalid code, please try again",
          dictionary: {
            es: {
              singular: "Código no válido. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Ungültiger Code, bitte versuche es erneut."
            },
            "fr-FR": {
              singular: "Code non valide, veuillez réessayer"
            },
            "ja-JP": {
              singular: "無効なコードです、再試行してください"
            },
            "ko-KR": {
              singular: "유효하지 않은 코드, 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Código inválido, por favor, tente novamente"
            },
            "zh-CN": {
              singular: "代码无效，请重试"
            }
          }
        })),
        otherwise: _v5.string().nullable(!0)
      })
    }),
    _v21 = _v4.default.div.withConfig({
      displayName: "LoginEmailForm__CheckboxContainer",
      componentId: "sc-2baaa43d-0"
    })`
  margin-top: ${(0, _v2.rem)(8)};
`,
    _v22 = (0, _v4.default)(_v11.Paragraph).withConfig({
      displayName: "LoginEmailForm__ParagraphLink",
      componentId: "sc-2baaa43d-1"
    })`
  color: var(--vimeo-colors-text-secondary);
  &.f2pPilotRegLogin {
    text-decoration: underline;
    color: var(--vimeo-colors-text-primary);
  }
  &:hover {
    text-decoration: underline;
  }
`,
    _v23 = _v4.default.div.withConfig({
      displayName: "LoginEmailForm__EmailOtp",
      componentId: "sc-2baaa43d-2"
    })`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
  display: block;
  text-decoration: none;
`;
  _v0.s(["LoginEmailForm", 0, function ({
    xsrft: _v0,
    redirectUrl: _v1,
    email: _v2,
    disableEmail: _v3,
    fa: _v4,
    onSuccess: _v5,
    onEmailChange: _v6,
    target: _v7 = "_self",
    showEnterpriseOptInConsent: _v8,
    placeholder: _v9,
    className: _v10,
    submitCtaText: _v11 = (0, _v8.translate)({
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
    }),
    isTwoStep: _v12,
    onTurnstileTokenChange: _v13,
    isFullScreen: _v14
  }) {
    var _v15;
    let _v16,
      [_v17, _v18] = (0, _v3.useState)(null),
      [_v19, _v20] = (0, _v3.useState)(!1),
      [_v21, _v22] = (0, _v3.useState)(!1),
      [_v23, _v24] = (0, _v3.useState)(""),
      [_v25, _v26] = (0, _v3.useState)(!1),
      [_v27, _v28] = (0, _v3.useState)(!1),
      [_v29, _v30] = (0, _v3.useState)(!1),
      [_v31, _v32] = (0, _v3.useState)(!1),
      {
        trackTurnstileLoadFailed: _v33
      } = (_v15 = "login", _v16 = (0, _v13.usePico)(), {
        trackTurnstileLoadFailed: (0, _v3.useCallback)(_v0 => {
          _v16.track("turnstile_load_failed", {
            turnstile_load_failed_reason: _v0,
            turnstile_load_failed_surface: _v15
          });
        }, [_v16, _v15])
      }),
      {
        turnstileToken: _v34
      } = (0, _v14.useTurnstile)(!1, "turnstile-container", {
        errorCb: _v0 => {
          "script_load_error" === _v0 || "script_timeout" === _v0 ? (_v32(!0), _v33(_v0), _v18((0, _v8.translate)({
            singular: "We're having trouble verifying your browser. This is usually caused by an ad blocker or privacy extension. Try disabling it and {B}refreshing the page{/B}, or {A}contact support{/A}.",
            replacements: {
              A: _v0 => (0, _v1.jsx)(_v12.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }),
              B: _v0 => (0, _v1.jsx)(_v12.Link, {
                href: "#",
                variant: "minimal",
                onClick: _v0 => {
                  _v0.preventDefault(), window.location.reload();
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Tenemos problemas para verificar su navegador. Esto suele ser causado por un bloqueador de anuncios o por una extensión de privacidad. Intente desactivarlo y {B}actualizar la página{/B}, o {A}póngase en contacto con el soporte{/A}."
              },
              "de-DE": {
                singular: "Wir haben Schwierigkeiten, Ihren Browser zu verifizieren. Dies wird normalerweise durch einen Adblocker oder eine Datenschutz-Erweiterung verursacht. Versuchen Sie, den Adblocker bzw. die Datenschutz-Erweiterung zu deaktivieren und {B}die Seite neu zu laden{/B}, oder {A}kontaktieren Sie den Support{/A}."
              },
              "fr-FR": {
                singular: "Nous rencontrons des difficultés pour vérifier votre navigateur. Cela est généralement causé par un bloqueur de publicités ou une extension de confidentialité. Essayez de le désactiver et {B}de rafraîchir la page{/B}, ou {A}contacter le support{/A}."
              },
              "ja-JP": {
                singular: "ブラウザの確認に問題が発生しています。これは通常、広告ブロッカーやプライバシー関連の拡張機能が原因です。それらを無効にして{B}ページを再読み込みする{/B}か、{A}サポートにお問い合わせください{/A}。"
              },
              "ko-KR": {
                singular: "브라우저를 확인하는 데 문제가 발생했습니다. 이는 일반적으로 광고 차단기나 개인정보 보호 확장 프로그램으로 인해 발생합니다. 해당 확장 프로그램을 비활성화한 다음 {B}페이지를 새로 고침{/B}하거나 {A}지원팀에 문의{/A}."
              },
              "pt-BR": {
                singular: "Estamos com dificuldades para verificar seu navegador. Isso geralmente é causado por um bloqueador de anúncios ou por uma extensão de privacidade. Tente desativar o bloqueador ou a extensão e {B}atualizar a página{/B}, ou {A}entre em contato com o suporte{/A}."
              },
              "zh-CN": {
                singular: "我们在验证您的浏览器时遇到问题。这通常是由广告拦截器或隐私扩展引起的。请尝试禁用它并{B}刷新页面{/B}，或 {A}联系支持{/A}。"
              }
            }
          }))) : (_v28(!0), _v18((0, _v8.translate)({
            singular: "Whoops! We are having some technical difficulties. To continue, contact our {A}support team{/A}.",
            replacements: {
              A: _v0 => (0, _v1.jsx)(_v12.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¡Uy! Estamos teniendo algunas dificultades técnicas. Para continuar, póngase en contacto con nuestro {A}equipo de asistencia{/A}."
              },
              "de-DE": {
                singular: "Hoppla! Wir haben einige technische Schwierigkeiten. Um fortzufahren, kontaktieren Sie unser {A}Support-Team{/A}."
              },
              "fr-FR": {
                singular: "Oups ! Nous rencontrons des difficultés techniques. Pour continuer, contactez notre {A}équipe d'assistance{/A}."
              },
              "ja-JP": {
                singular: "申し訳ありません。現在、技術的な問題が発生しています。続行するには、 {A}サポートチーム{/A}までお問い合わせください。"
              },
              "ko-KR": {
                singular: "이런! 현재 기술적인 문제가 발생했습니다. 계속하려면 {A}지원팀{/A}에 문의하세요."
              },
              "pt-BR": {
                singular: "Opa! Estamos com algumas dificuldades técnicas. Para continuar, entre em contato com nossa {A}equipe de suporte{/A}."
              },
              "zh-CN": {
                singular: "抱歉！我们遇到了一些技术困难。如需继续，请联系我们的{A}支持团队{/A}。"
              }
            }
          })));
        },
        beforeInteractiveCb: () => _v28(!0)
      }),
      _v35 = async (_v0, _v1) => {
        if (_v19 && _v20(!1), _v17 && _v18(""), !_v36.valid && !_v1) return void _v18((0, _v8.translate)({
          singular: "Please enter your email and password",
          dictionary: {
            es: {
              singular: "Introduce tu correo electrónico y contraseña"
            },
            "de-DE": {
              singular: "Bitte gib dein E-Mail und dein Kennwort ein"
            },
            "fr-FR": {
              singular: "Veuillez saisir votre e-mail et mot de passe"
            },
            "ja-JP": {
              singular: "あなたのメールアドレスとパスワードを入力してください。"
            },
            "ko-KR": {
              singular: "이메일과 비밀번호를 입력하세요"
            },
            "pt-BR": {
              singular: "Por favor, digite seu e-mail e senha"
            },
            "zh-CN": {
              singular: "请输入您的电子邮件和密码"
            }
          }
        }));
        let _v2 = `email=${encodeURIComponent(_v0.email)}&password=${encodeURIComponent(_v0.password)}&token=${_v0}&otp=${encodeURIComponent(_v0.otp)}&action=login&service=vimeo&otp_required=${encodeURIComponent(_v23)}&request_new_token=${encodeURIComponent(+!!_v1)}&enterprise_opt_in_consent=${encodeURIComponent(+!!_v25)}&turnstile_token=${_v34 || ""}`;
        _v1 && (_v2 += `&redirect=${encodeURIComponent(_v1)}`);
        try {
          let _v0 = await (0, _v15.Login)(_v2, "/log_in");
          if (429 === _v0.status) return void _v18((0, _v8.translate)({
            singular: "Sorry, but you have had too many invalid login attempts. Please wait a few minutes and try again.",
            dictionary: {
              es: {
                singular: "Lo sentimos, has tenido muchos intentos fallidos para iniciar sesión. Espera unos minutos e inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Es tut uns leid, aber du hattest zu viele ungültige Anmeldeversuche. Bitte warte einige Minuten und versuche es erneut."
              },
              "fr-FR": {
                singular: "Désolé, mais vous avez accumulé un trop grand nombre de tentatives de connexion invalides. Veuillez attendre quelques minutes et réessayer."
              },
              "ja-JP": {
                singular: "残念ながら、短時間に大量に無効ログインが試されました。安全性確保のため、しばらくお待ちいただいてから、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다, 로그인 실패 한도를 초과했습니다. 몇 분 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Desculpe, mas já ocorreram muitas tentativas inválidas de conexão. Aguarde alguns minutos e tente de novo."
              },
              "zh-CN": {
                singular: "抱歉，您的无效登录尝试次数过多。请过几分钟后再重试。"
              }
            }
          }));
          _v0.force_redirect && (_v0.redirect_url && (0, _v17.isVimeoRedirectableUrl)(_v0.redirect_url) ? window.location.href = _v0.redirect_url : window.location.href = "/"), _v5 && _v5(_v0);
        } catch (_v0) {
          let _v1 = "Email and password do not match";
          for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0) && 0 !== _v0.indexOf("has_error_")) {
            _v1 = _v0[_v0];
            break;
          }
          if (_v0.hasOwnProperty("email")) return void _v18((0, _v8.translate)({
            singular: "Please enter a valid email address",
            dictionary: {
              es: {
                singular: "Introduce una dirección de correo electrónico válida."
              },
              "de-DE": {
                singular: "Bitte gib eine gültige E-Mail-Adresse an"
              },
              "fr-FR": {
                singular: "Veuillez saisir une adresse e-mail valide"
              },
              "ja-JP": {
                singular: "正しいメールアドレスを入力してください"
              },
              "ko-KR": {
                singular: "올바른 이메일 주소를 입력하세요."
              },
              "pt-BR": {
                singular: "Digite um endereço de e-mail válido"
              },
              "zh-CN": {
                singular: "请输入有效的电子邮件地址"
              }
            }
          }));
          if (_v0.hasOwnProperty("has_error_invalid_credentials")) return void _v18((0, _v8.translate)({
            singular: "Email and password do not match",
            dictionary: {
              es: {
                singular: "El correo electrónico y la contraseña no coinciden."
              },
              "de-DE": {
                singular: "E-Mail und Kennwort stimmen nicht überein"
              },
              "fr-FR": {
                singular: "L'adresse e-mail ne correspond pas au mot de passe que vous avez saisi"
              },
              "ja-JP": {
                singular: "E メールとパスワードが一致しません"
              },
              "ko-KR": {
                singular: "이메일과 비밀번호가 일치하지 않습니다."
              },
              "pt-BR": {
                singular: "O e-mail e a senha não correspondem"
              },
              "zh-CN": {
                singular: "电子邮件和密码不匹配"
              }
            }
          }));
          if (_v0.hasOwnProperty("has_error_resent_otp") && _v1) return void _v18((0, _v8.translate)({
            singular: "Authentication code emailed",
            dictionary: {
              es: {
                singular: "Código de autentificación enviado por correo electrónico"
              },
              "de-DE": {
                singular: "Authentifizierungscode wurde gesendet"
              },
              "fr-FR": {
                singular: "Code d'authentification envoyé"
              },
              "ja-JP": {
                singular: "認証コードがEメールで送信されました"
              },
              "ko-KR": {
                singular: "인증 코드가 이메일로 전송되었습니다."
              },
              "pt-BR": {
                singular: "Código de autenticação enviado por e-mail"
              },
              "zh-CN": {
                singular: "验证码已通过电子邮件发送"
              }
            }
          }));
          if (_v0.hasOwnProperty("has_error_email_verification_required")) {
            _v30(!0), _v18((0, _v8.translate)({
              singular: "To finish signing up, follow the instructions we sent to: {EMAIL}",
              replacements: {
                EMAIL: _v0.email
              },
              dictionary: {
                es: {
                  singular: "Para terminar de registrarse, siga las instrucciones que le enviamos a: {EMAIL}"
                },
                "de-DE": {
                  singular: "Um die Registrierung abzuschließen, folgen Sie den Anweisungen, die wir an {EMAIL}gesendet haben."
                },
                "fr-FR": {
                  singular: "Pour finaliser votre inscription, suivez les instructions que nous vous avons envoyées à : {EMAIL}"
                },
                "ja-JP": {
                  singular: "登録を完了するには、次の宛先に送信された手順に従ってください：{EMAIL}"
                },
                "ko-KR": {
                  singular: "가입을 완료하려면 {EMAIL}(으)로 보내 드린 안내를 따르세요."
                },
                "pt-BR": {
                  singular: "Para finalizar o cadastro, siga as instruções que enviamos para: {EMAIL}"
                },
                "zh-CN": {
                  singular: "要完成注册，请按照我们发送给 {EMAIL} 的说明进行操作"
                }
              }
            }));
            return;
          }
          let _v2 = !1;
          for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0) && 0 === _v0.indexOf("has_error_invalid_otp")) {
            _v2 = !0;
            break;
          }
          _v2 && (_v0.hasOwnProperty("has_error_invalid_otp_email") ? _v24("email") : _v0.hasOwnProperty("has_error_invalid_otp_totp") ? _v24("totp") : _v0.hasOwnProperty("has_error_invalid_otp_risky") && _v24("risky"), _v39?.iris?.value && _v20(!0)), _v0.isOtp = _v2, _v22(_v2), _v0.hasOwnProperty("has_captcha_error") && (_v1 = (0, _v8.translate)({
            singular: "Unable to verify CAPTCHA. Please try again or visit the {A}Support Center{/A} for help.",
            replacements: {
              A: _v0 => (0, _v1.jsx)(_v12.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "No se pudo verificar el CAPTCHA. Vuelva a intentarlo o visite el {A}Centro de asistencia{/A} para obtener ayuda."
              },
              "de-DE": {
                singular: "CAPTCHA kann nicht überprüft werden. Bitte versuchen Sie es erneut oder besuchen Sie das {A}Support Center{/A}, um Hilfe zu erhalten."
              },
              "fr-FR": {
                singular: "Impossible de vérifier le CAPTCHA. Veuillez réessayer ou accéder au {A}Centre d'assistance{/A} pour obtenir de l'aide."
              },
              "ja-JP": {
                singular: "CAPTCHAを確認できません。もう一度お試しになるか、 {A}サポートセンター{/A}にアクセスしてください。"
              },
              "ko-KR": {
                singular: "CAPTCHA를 확인할 수 없습니다. 다시 시도하거나 {A}지원 센터{/A}를 방문하여 도움을 받으세요."
              },
              "pt-BR": {
                singular: "Não foi possível verificar o CAPTCHA. Tente novamente ou visite o {A}Centro de suporte{/A} para obter ajuda."
              },
              "zh-CN": {
                singular: "无法验证 CAPTCHA。请重试或访问{A}支持中心{/A}寻求帮助。"
              }
            }
          }), _v22(!1), _v24(""), _v18(_v1));
        }
      },
      _v36 = (0, _v7.useForm)({
        validationSchema: _v20,
        initialValues: {
          email: _v2 || "",
          password: "",
          otp: "",
          isOtp: !1,
          enterpriseOptInAccepted: !1,
          turnstileToken: ""
        },
        onSubmit: _v0 => _v35(_v0)
      }),
      _v37 = (0, _v7.useField)(_v36, "email"),
      _v38 = (0, _v7.useField)(_v36, "password"),
      _v39 = (0, _v7.useField)(_v36, "otp"),
      _v40 = (0, _v7.useField)(_v36, "turnstileToken"),
      _v41 = (0, _v3.useRef)(null);
    (0, _v3.useEffect)(() => {
      if (_v14) return;
      let _v0 = requestAnimationFrame(() => _v41.current?.focus());
      return () => cancelAnimationFrame(_v0);
    }, [_v14]);
    let _v42 = _v0 => {
        _v37.iris.onChange(_v0), _v6 && _v6(_v0.target.value);
      },
      _v43 = {
        placeholder: _v9 ? _v9.email : (0, _v8.translate)({
          singular: "Email address",
          dictionary: {
            es: {
              singular: "Correo electrónico"
            },
            "de-DE": {
              singular: "E-Mail-Adresse"
            },
            "fr-FR": {
              singular: "Adresse e-mail"
            },
            "ja-JP": {
              singular: "メールアドレス"
            },
            "ko-KR": {
              singular: "이메일 주소"
            },
            "pt-BR": {
              singular: "Endereço de e-mail"
            },
            "zh-CN": {
              singular: "电子邮件地址"
            }
          }
        })
      },
      _v44 = {
        placeholder: _v9 ? _v9.password : (0, _v8.translate)({
          singular: "Password",
          dictionary: {
            es: {
              singular: "Contraseña"
            },
            "de-DE": {
              singular: "Kennwort"
            },
            "fr-FR": {
              singular: "Mot de passe "
            },
            "ja-JP": {
              singular: "パスワード"
            },
            "ko-KR": {
              singular: "비밀번호"
            },
            "pt-BR": {
              singular: "Senha"
            },
            "zh-CN": {
              singular: "密码"
            }
          }
        })
      };
    return (0, _v3.useEffect)(() => {
      _v13 && _v13(_v34), _v40?.handlers?.setValue(_v34), _v34 && "" !== _v34 && _v31 && (_v32(!1), _v18(null));
    }, [_v34, _v40?.handlers, _v13, _v31]), (0, _v1.jsxs)("form", {
      onSubmit: _v36.handleSubmit,
      noValidate: !0,
      children: [_v14 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v18.InputWrapper, {
          children: [(0, _v1.jsx)(_v18.StyledInput, {
            "data-testid": "site_login_email_input",
            id: "email_login",
            autoComplete: "email",
            isDisabled: _v3 || !!_v23,
            ..._v37.iris,
            onChange: _v42,
            marginBottom: "200"
          }), (0, _v1.jsx)(_v18.Label, {
            htmlFor: "email_login",
            children: (0, _v8.translate)({
              singular: "Enter email",
              dictionary: {
                es: {
                  singular: "Escribir correo electrónico"
                },
                "de-DE": {
                  singular: "E-Mail-Adresse eingeben"
                },
                "fr-FR": {
                  singular: "Saisir une adresse e-mail"
                },
                "ja-JP": {
                  singular: "Eメールアドレスを入力"
                },
                "ko-KR": {
                  singular: "이메일 입력"
                },
                "pt-BR": {
                  singular: "Inserir e-mail"
                },
                "zh-CN": {
                  singular: "输入电子邮件"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v18.InputWrapper, {
          children: [(0, _v1.jsx)(_v18.StyledInput, {
            "data-testid": "site_login_password_input",
            id: "password_login",
            type: "password",
            autoComplete: "current-password",
            isDisabled: !!_v23,
            ..._v38.iris
          }), (0, _v1.jsx)(_v18.Label, {
            htmlFor: "password_login",
            children: (0, _v8.translate)({
              singular: "Enter password",
              dictionary: {
                es: {
                  singular: "Ingresar la contraseña"
                },
                "de-DE": {
                  singular: "Bitte Kennwort eingeben"
                },
                "fr-FR": {
                  singular: "Saisir mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを入力"
                },
                "ko-KR": {
                  singular: "비밀번호 입력"
                },
                "pt-BR": {
                  singular: "Digite a senha"
                },
                "zh-CN": {
                  singular: "输入密码"
                }
              }
            })
          })]
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.Input, {
          ..._v43,
          "aria-label": (0, _v8.translate)({
            singular: "Email",
            dictionary: {
              es: {
                singular: "Correo electrónico"
              },
              "de-DE": {
                singular: "E-Mail-Adresse"
              },
              "fr-FR": {
                singular: "E-mail"
              },
              "ja-JP": {
                singular: "E メール"
              },
              "ko-KR": {
                singular: "이메일"
              },
              "pt-BR": {
                singular: "E-mail"
              },
              "zh-CN": {
                singular: "电子邮件"
              }
            }
          }),
          autoComplete: "email",
          emailRef: _v41,
          "data-testid": "site_login_email_input",
          id: "email_login",
          status: _v17 ? "negative" : "neutral",
          disabled: _v3 || !!_v23,
          ..._v37.iris,
          onChange: _v42
        }), (0, _v1.jsx)(_v16.Input, {
          "data-testid": "site_login_password_input",
          id: "password_login",
          ..._v44,
          "aria-label": (0, _v8.translate)({
            singular: "Password",
            dictionary: {
              es: {
                singular: "Contraseña"
              },
              "de-DE": {
                singular: "Kennwort"
              },
              "fr-FR": {
                singular: "Mot de passe "
              },
              "ja-JP": {
                singular: "パスワード"
              },
              "ko-KR": {
                singular: "비밀번호"
              },
              "pt-BR": {
                singular: "Senha"
              },
              "zh-CN": {
                singular: "密码"
              }
            }
          }),
          autoComplete: "current-password",
          type: "password",
          status: _v17 ? "negative" : "neutral",
          disabled: !!_v23,
          ..._v38.iris
        })]
      }), _v14 ? null : (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v12.Link, {
          format: "primary",
          href: "/forgot_password",
          variant: "minimal",
          target: _v7,
          onClick: () => (0, _v19.trackForgotPasswordClick)(_v12, _v1),
          children: (0, _v1.jsx)(_v22, {
            size: "2",
            className: _v10,
            children: (0, _v8.translate)({
              singular: "Forgot your password?",
              dictionary: {
                es: {
                  singular: "¿Olvidó su contraseña?"
                },
                "de-DE": {
                  singular: "Kennwort vergessen?"
                },
                "fr-FR": {
                  singular: "Vous avez oublié votre mot de passe ?"
                },
                "ja-JP": {
                  singular: "パスワードをお忘れですか？"
                },
                "ko-KR": {
                  singular: "비밀번호를 잊으셨나요?"
                },
                "pt-BR": {
                  singular: "Esqueceu sua senha?"
                },
                "zh-CN": {
                  singular: "忘记密码？"
                }
              }
            })
          })
        })
      }), _v8 ? (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v21, {
          children: (0, _v1.jsx)(_v9.Checkbox, {
            checked: _v25,
            onChange: () => {
              _v26(!_v25);
            },
            id: "enterprise-opt-in-consent",
            name: "enterprise-opt-in-consent",
            label: (0, _v1.jsx)(_v11.Paragraph, {
              size: "3",
              children: (0, _v8.translate)({
                singular: "By signing into a Vimeo Enterprise account, I agree and understand that the Vimeo Enterprise account owner will administer my account and have access to my account information, including viewing activity. To withdraw from ongoing disclosures of your viewing activity to the account owner, contact your administrator.",
                dictionary: {
                  es: {
                    singular: "Al iniciar sesión en una cuenta de Vimeo Enterprise, acepto y entiendo que el propietario de la cuenta de Vimeo Enterprise administrará mi cuenta y tendrá acceso a la información de mi cuenta, incluida la actividad de visualización. Para dejar de compartir automáticamente su actividad de visualización con su propietario de la cuenta, contacte a su administrador."
                  },
                  "de-DE": {
                    singular: "Mit der Anmeldung bei einem Vimeo Enterprise-Konto erkläre ich mich damit einverstanden, dass der Inhaber dieses Vimeo Enterprise-Kontos mein Konto verwaltet und Zugang zu meinen Kontoinformationen hat, einschließlich Informationen zu den von mir angesehenen Inhalten. Wenn du nicht möchtest, dass der Kontoinhaber zukünftig Einsicht in die von dir angesehenen Inhalte hat, wende dich bitte an deinen Administrator."
                  },
                  "fr-FR": {
                    singular: "En me connectant à un compte Vimeo Entreprise, je comprends et j'accepte que le propriétaire du compte Vimeo Entreprise gèrera et aura accès aux informations de mon compte, y compris à mon activité de visionnage. Veuillez contacter votre administrateur pour demander à ce que votre activité de visionnage ne soit plus divulguée au propriétaire du compte."
                  },
                  "ja-JP": {
                    singular: "VimeoのEnterpriseアカウントにサインインすることによって、私は、このEnterpriseのアカウント所有者が私のアカウントを管理すること、および閲覧アクティビティを含む私のアカウント情報にアクセスできることを理解し、これらに同意します。アカウント所有者による閲覧アクティビティへのアクセスを停止したい場合は、所属する組織の管理者に連絡してください。"
                  },
                  "ko-KR": {
                    singular: "Vimeo Enterprise 계정에 로그인함으로써 본인은 Vimeo Enterprise 계정 소유자가 내 계정을 관리하고 보기 활동을 포함한 내 계정 정보에 액세스할 수 있음에 동의하고 이를 이해합니다. 더 이상 보기 활동을 계정 소유자에게 공개하고 싶지 않을 경우 관리자에게 문의하세요."
                  },
                  "pt-BR": {
                    singular: "Ao entrar na conta do Vimeo Enterprise, eu concordo e entendo que o proprietário da conta do Vimeo Enterprise administrará minha conta e terá acesso às informações da minha conta, incluindo a atividade de visualização. Para remover as divulgações contínuas da sua atividade de visualização ao proprietário da conta, entre em contato com o administrador."
                  },
                  "zh-CN": {
                    singular: "登录 Vimeo Enterprise 帐户，即表示我同意并理解 Vimeo Enterprise 帐户所有者将管理我的帐户并有权访问我的帐户信息，包括查看活动。如不想再向帐户所有者持续披露您的查看活动，请联系您的管理员。"
                  }
                }
              })
            })
          })
        })
      }) : null, "email" === _v23 && (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v10.Notice, {
          format: "primary",
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "3",
            children: (0, _v8.translate)({
              singular: "A security code has been sent to your email address",
              dictionary: {
                es: {
                  singular: "Se envió un código de seguridad a tu dirección de correo electrónico."
                },
                "de-DE": {
                  singular: "Eine E-Mail mit einem Sicherheitscode wurde an deine E-Mail-Adresse gesendet."
                },
                "fr-FR": {
                  singular: "Un code de sécurité vous a été envoyé à votre adresse e-mail"
                },
                "ja-JP": {
                  singular: "メールアドレスにセキュリティコードが送信されました"
                },
                "ko-KR": {
                  singular: "보안 코드가 이메일 주소로 전송되었습니다."
                },
                "pt-BR": {
                  singular: "Um código de segurança foi enviado para o seu endereço de e-mail"
                },
                "zh-CN": {
                  singular: "安全代码已发送至您的电子邮箱"
                }
              }
            })
          })
        })
      }), "totp" === _v23 && (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v10.Notice, {
          format: "primary",
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "3",
            children: (0, _v8.translate)({
              singular: "Please enter the code from the authenticator app you configured when setting up Two-Factor authentication (2FA).",
              dictionary: {
                es: {
                  singular: "Ingresa el código de la aplicación de autenticación que configuraste al establecer la autenticación de dos factores (2FA)."
                },
                "de-DE": {
                  singular: "Bitte gib den Code aus der Authenticator-App ein, den du beim Erstellen der Zwei-Faktor-Authentifizierung (2FA) konfiguriert hast."
                },
                "fr-FR": {
                  singular: "Veuillez saisir le code de l'application d'authentification que vous avez configurée lorsque vous avez paramétré l'authentification à deux facteurs (2FA)."
                },
                "ja-JP": {
                  singular: "二段階認証（2FA）を設定する際に構成した、Authenticatorアプリのコードを入力してください。"
                },
                "ko-KR": {
                  singular: "2단계 인증(2FA)을 설정할 때 구성한 인증 앱의 코드를 입력하세요."
                },
                "pt-BR": {
                  singular: "Por favor, insira o código do Aplicativo de Autenticação que você definiu ao configurar a autenticação de dois fatores (2FA)."
                },
                "zh-CN": {
                  singular: "请输入您在设置双因素身份验证 (2FA) 时配置的身份验证器应用程序中的代码。"
                }
              }
            })
          })
        })
      }), "risky_otp" === _v23 && (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v10.Notice, {
          format: "primary",
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "3",
            children: (0, _v8.translate)({
              singular: "As an added security measure, we've sent a 6-digit passcode to your email address. Please enter it below. {A}Need help?{/A}",
              replacements: {
                A: _v0 => (0, _v1.jsx)("a", {
                  href: "https://vimeo.com/help/contact?category=cf_account&subcategory=cf_risky_2fa_challenge",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Como una medida de seguridad adicional, hemos enviado un código de acceso de 6 dígitos a tu dirección de correo electrónico. Ingrésalo a continuación. {A}¿Necesitas ayuda?{/A}"
                },
                "de-DE": {
                  singular: "Als zusätzliche Sicherheitsmaßnahme haben wir einen 6-stelligen Passcode an deine E-Mail-Adresse geschickt. Bitte gib ihn unten ein. {A}Brauchst du Hilfe?{/A}"
                },
                "fr-FR": {
                  singular: "Comme mesure de sécurité supplémentaire, nous avons envoyé un code à 6 chiffres à votre adresse e-mail. Veuillez le saisir ci-dessous. {A}Besoin d'aide ?{/A}"
                },
                "ja-JP": {
                  singular: "追加のセキュリティ対策として、6桁のパスコードをお客様のメールアドレスに送信しました。下に入力してください。{A}お困りですか？{/A}"
                },
                "ko-KR": {
                  singular: "추가 보안 조치로 회원님의 이메일 주소로 비밀번호 6자리를 전송했습니다. 비밀번호를 아래에 입력하세요. {A}도움이 필요하신가요?{/A}"
                },
                "pt-BR": {
                  singular: "Como medida de segurança adicional, enviamos uma senha de seis dígitos para seu endereço de e-mail. Insira a senha abaixo. {A}Precisa de ajuda? {/A}"
                },
                "zh-CN": {
                  singular: "我们向您的电子邮件地址发送了一个 6 位数的密码，作为额外的安全措施。请在下面输入该密码。{A}需要帮助吗？{/A}"
                }
              }
            })
          })
        })
      }), _v17 && (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v10.Notice, {
          format: _v29 ? "primary" : "negative",
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "3",
            children: (0, _v8.translate)({
              singular: "{ERROR}",
              replacements: {
                ERROR: _v17
              }
            })
          })
        })
      }), (0, _v1.jsx)(_v6.Box, {
        as: "section",
        mx: "auto",
        my: (0, _v2.rem)(10),
        display: _v27 ? "block" : "none",
        children: (0, _v1.jsx)("div", {
          id: "turnstile-container"
        })
      }), _v21 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.Input, {
          ..._v39.iris,
          id: "otp",
          placeholder: (0, _v8.translate)({
            singular: "Security code",
            dictionary: {
              es: {
                singular: "Código de seguridad"
              },
              "de-DE": {
                singular: "Sicherheitscode"
              },
              "fr-FR": {
                singular: "Code de sécurité"
              },
              "ja-JP": {
                singular: "セキュリティコード"
              },
              "ko-KR": {
                singular: "보안 코드"
              },
              "pt-BR": {
                singular: "Código de segurança"
              },
              "zh-CN": {
                singular: "安全码"
              }
            }
          }),
          type: "text",
          status: _v17 ? "negative" : "neutral",
          onChange: _v0 => {
            _v19 && _v20(!1), _v39.iris.onChange(_v0);
          }
        }), (0, _v1.jsx)(_v16.FormSection, {
          children: (0, _v1.jsx)(_v23, {
            onClick: () => {
              _v35({
                email: _v37.iris.value,
                password: _v38.iris.value,
                otp: _v39.iris.value,
                isOtp: !0
              }, !0);
            },
            children: (0, _v8.translate)({
              singular: "Email me a new code",
              dictionary: {
                es: {
                  singular: "Recibir un nuevo código por correo electrónico"
                },
                "de-DE": {
                  singular: "Neuen Code per E-Mail senden"
                },
                "fr-FR": {
                  singular: "Envoyez-moi un nouveau code par e-mail"
                },
                "ja-JP": {
                  singular: "新しいコードをEメールする"
                },
                "ko-KR": {
                  singular: "새 코드 전송하기"
                },
                "pt-BR": {
                  singular: "Me envie um email com o novo código"
                },
                "zh-CN": {
                  singular: "通过电子邮件向我发送新代码"
                }
              }
            })
          })
        })]
      }), _v19 && (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v10.Notice, {
          format: "negative",
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "3",
            children: (0, _v8.translate)({
              singular: "Security Code entered is incorrect",
              dictionary: {
                es: {
                  singular: "El código de seguridad ingresado es incorrecto."
                },
                "de-DE": {
                  singular: "Der angegebene Geheimcode ist ungültig."
                },
                "fr-FR": {
                  singular: "Le code de sécurité saisi est incorrect"
                },
                "ja-JP": {
                  singular: "入力したセキュリティコードが正しくありません"
                },
                "ko-KR": {
                  singular: "입력한 보안 코드가 올바르지 않습니다."
                },
                "pt-BR": {
                  singular: "O Código de Segurança inserido está incorreto"
                },
                "zh-CN": {
                  singular: "输入的安全码不正确"
                }
              }
            })
          })
        })
      }), (0, _v1.jsx)(_v16.FormSection, {
        children: (0, _v1.jsx)(_v16.ContinueButton, {
          "data-testid": "site_login_submit_button",
          disabled: !_v36.valid || _v8 && !_v25 || _v31,
          loading: _v36.submitting,
          onClick: () => {
            (0, _v19.trackLogin)("password", _v4), (0, _v19.trackLoginWithEmailClick)(_v12, _v1);
          },
          className: _v10,
          children: _v11
        })
      })]
    });
  }], 0);
}