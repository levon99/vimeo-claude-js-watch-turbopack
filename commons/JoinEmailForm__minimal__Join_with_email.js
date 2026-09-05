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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  _v0.s(["JoinEmailForm", 0, function ({
    xsrft: _v0,
    optIn: _v1,
    name: _v2,
    email: _v3,
    redirectUrl: _v4,
    fa: _v5,
    onSuccess: _v6,
    onEmailChange: _v7,
    disableEmail: _v8,
    inputFieldVariant: _v9,
    emailRef: _v10,
    placeholder: _v11,
    formType: _v12 = "minimal",
    submitCtaText: _v13 = (0, _v17.translate)({
      singular: "Join with email",
      dictionary: {
        es: {
          singular: "Únete con el correo electrónico"
        },
        "de-DE": {
          singular: "Mit E-Mail registrieren"
        },
        "fr-FR": {
          singular: "S'inscrire avec e-mail"
        },
        "ja-JP": {
          singular: "Eメールで登録"
        },
        "ko-KR": {
          singular: "이메일로 가입하기"
        },
        "pt-BR": {
          singular: "Cadastrar com e-mail"
        },
        "zh-CN": {
          singular: "使用电子邮件加入"
        }
      }
    }),
    pill: _v14 = !1,
    inputFieldsOrder: _v15,
    source: _v16,
    termsAndConditions: _v17,
    disclaimer: _v18,
    hasF2PVariant: _v19,
    marketingCheckBox: _v20,
    className: _v21,
    hideEmail: _v22 = !1,
    hideName: _v23 = !1,
    isInGIPTest: _v24 = !1,
    turnstileToken: _v25,
    turnstileError: _v26,
    captchaVisible: _v27,
    setIsJoinSecondScreen: _v28,
    setIsCheckEmailVerifyScreen: _v29,
    bpData: _v30,
    isFullScreen: _v31 = !1,
    stickyFooter: _v32,
    header: _v33,
    onError: _v34,
    unifiedAuthDesignOverride: _v35 = !1
  }) {
    let [_v36, _v37] = (0, _v4.useState)(null),
      [_v38, _v39] = (0, _v4.useState)({}),
      [_v40, _v41] = (0, _v4.useState)(!0),
      [_v42, _v43] = (0, _v4.useState)(!1),
      [_v44, _v45] = (0, _v4.useState)(!1),
      [_v46, _v47] = (0, _v4.useState)(!1),
      _v48 = (0, _v22.useRecaptchaEnterpriseToken)(!1),
      _v49 = (0, _v20.useViewer)(),
      {
        trackSignupCompleted: _v50
      } = (0, _v19.useSignupTracking)(),
      _v51 = !!_v49?.requiresAgeSelfCertification,
      _v52 = (0, _v13.useIsMobile)();
    (0, _v4.useEffect)(() => {
      _v26 && _v37(_v26);
    }, [_v26]), (0, _v4.useEffect)(() => {
      (0, _v25.trackJoinPageImpressionRegFlow0625)({
        location: "join_page_step_2"
      });
    }, []);
    let _v53 = _v31 ? {
        confirmPassword: ""
      } : {},
      _v54 = _v31 ? {
        confirmPassword: _v5.string().oneOf([_v5.ref("password")], (0, _v17.translate)({
          singular: "Please confirm password",
          dictionary: {
            es: {
              singular: "Por favor, confirme la contraseña"
            },
            "de-DE": {
              singular: "Bitte bestätigen Sie das Passwort"
            },
            "fr-FR": {
              singular: "Veuillez confirmer le mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを確認してください"
            },
            "ko-KR": {
              singular: "비밀번호를 확인해 주세요."
            },
            "pt-BR": {
              singular: "Confirme a senha"
            },
            "zh-CN": {
              singular: "请确认密码"
            }
          }
        })).required((0, _v17.translate)({
          singular: "Please confirm password",
          dictionary: {
            es: {
              singular: "Por favor, confirme la contraseña"
            },
            "de-DE": {
              singular: "Bitte bestätigen Sie das Passwort"
            },
            "fr-FR": {
              singular: "Veuillez confirmer le mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを確認してください"
            },
            "ko-KR": {
              singular: "비밀번호를 확인해 주세요."
            },
            "pt-BR": {
              singular: "Confirme a senha"
            },
            "zh-CN": {
              singular: "请确认密码"
            }
          }
        }))
      } : {},
      _v55 = (0, _v17.translate)({
        singular: "Password must be at least {MIN} characters and contain at least one number and at least one symbol.",
        replacements: {
          MIN: _v24.MIN_PASSWORD_LENGTH
        },
        dictionary: {
          es: {
            singular: "La contraseña debe tener un mínimo de {MIN} caracteres e incluir al menos un número y un símbolo."
          },
          "de-DE": {
            singular: "Das Kennwort muss mindestens {MIN} Stellen haben und mindestens eine Zahl und ein Sonderzeichen enthalten"
          },
          "fr-FR": {
            singular: "Le mot de passe doit être composé d'au moins {MIN} caractères et contenir au moins 1 chiffre et 1 symbole."
          },
          "ja-JP": {
            singular: "パスワードは {MIN}文字以上で、数字と記号がそれぞれ1つ以上含まれている必要があります。"
          },
          "ko-KR": {
            singular: "비밀번호는 최소 {MIN}자 이상이어야 하며 숫자와 기호를 각각 하나 이상 포함해야 합니다."
          },
          "pt-BR": {
            singular: "A senha deve ter pelo menos {MIN} caracteres e conter pelo menos um número e pelo menos um símbolo."
          },
          "zh-CN": {
            singular: "密码长度必须至少为 {MIN} 个字符，且至少包含一个数字和一个符号。"
          }
        }
      }),
      _v56 = _v5.object({
        name: _v5.string().max(32).required((0, _v17.translate)({
          singular: "Please enter your name",
          dictionary: {
            es: {
              singular: "Introduce tu nombre"
            },
            "de-DE": {
              singular: "Bitte gib deinen Namen ein"
            },
            "fr-FR": {
              singular: "Veuillez saisir votre nom"
            },
            "ja-JP": {
              singular: "名前を入力してください"
            },
            "ko-KR": {
              singular: "이름을 입력하세요"
            },
            "pt-BR": {
              singular: "Por favor, digite seu nome"
            },
            "zh-CN": {
              singular: "请输入您的姓名"
            }
          }
        })),
        email: _v5.string().email((0, _v17.translate)({
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
        })).required((0, _v17.translate)({
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
        password: _v5.string().min(_v24.MIN_PASSWORD_LENGTH, _v55).matches(/[0-9]/, _v55).matches(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, _v55).max(_v24.MAX_PASSWORD_LENGTH, (0, _v17.translate)({
          singular: "Password must be less than {MAX} characters and contain at least one number and at least one symbol.",
          replacements: {
            MAX: _v24.MAX_PASSWORD_LENGTH
          },
          dictionary: {
            es: {
              singular: "La contraseña debe tener menos de {MAX} caracteres e incluir al menos un número y un símbolo."
            },
            "de-DE": {
              singular: "Das Kennwort darf höchstens {MAX} Stellen lang sein und muss mindestens eine Zahl und ein Sonderzeichen enthalten"
            },
            "fr-FR": {
              singular: "Le mot de passe doit être composé de moins de {MAX} caractères et contenir au moins 1 chiffre et 1 symbole."
            },
            "ja-JP": {
              singular: "パスワードは {MAX}文字以内で、数字と記号がそれぞれ1つ以上含まれている必要があります。"
            },
            "ko-KR": {
              singular: "비밀번호는 {MAX}자를 초과할 수 없으며 숫자와 기호를 각각 하나 이상 포함해야 합니다."
            },
            "pt-BR": {
              singular: "A senha deve ter menos de {MAX} caracteres e conter pelo menos um número e pelo menos um símbolo."
            },
            "zh-CN": {
              singular: "密码长度必须少于 {MAX} 个字符，且至少包含一个数字和一个符号。"
            }
          }
        })).required((0, _v17.translate)({
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
        ..._v54
      }),
      _v57 = (0, _v16.useForm)({
        validationSchema: _v56,
        initialValues: {
          email: _v3 || "",
          password: "",
          name: _v2 || "",
          overEighteenCertification: !1,
          ..._v53
        },
        onSubmit: async _v0 => {
          let _v1 = _v57[_v16.CONTROLLER]?.state?.errors;
          for (let {
            field: _v0,
            errorCode: _v1,
            reason: _v2
          } of [{
            field: "email",
            errorCode: {
              has_error_invalid_email: ""
            },
            reason: "invalid_email"
          }, {
            field: "password",
            errorCode: {
              has_error_password_too_simple: ""
            },
            reason: "password_requirements_not_met"
          }]) if (_v1?.has(_v0) && Array.isArray(_v1.get(_v0)) && (_v1.get(_v0)?.length ?? 0) > 0) {
            _v37(_v1.get(_v0)?.[0] ?? ""), _v39(_v1), _v34?.(_v2);
            return;
          }
          if (_v51 && !_v0.overEighteenCertification) {
            _v37((0, _v17.translate)({
              singular: "Please certify you are over 18 by checking input box",
              dictionary: {
                es: {
                  singular: "Marque la casilla para confirmar que tiene 18 años o más."
                },
                "de-DE": {
                  singular: "Setzen Sie ein Häkchen, um zu bestätigen, dass Sie über 18 Jahre alt sind."
                },
                "fr-FR": {
                  singular: "Veuillez certifier que vous avez plus de 18 ans en cochant la case"
                },
                "ja-JP": {
                  singular: "入力ボックスにチェックを入れて、18歳以上であることを確認してください。"
                },
                "ko-KR": {
                  singular: "확인란에 체크하여 만 18세 이상임을 확인해 주세요."
                },
                "pt-BR": {
                  singular: "Marque a caixa de seleção para confirmar que você tem mais de 18 anos"
                },
                "zh-CN": {
                  singular: "请勾选输入框以确认您已年满 18 岁。"
                }
              }
            })), _v47(!0), _v34?.("age_certification_required");
            return;
          }
          if (_v31 && _v0.password !== _v0.confirmPassword) {
            _v37((0, _v17.translate)({
              singular: "Please confirm password",
              dictionary: {
                es: {
                  singular: "Por favor, confirme la contraseña"
                },
                "de-DE": {
                  singular: "Bitte bestätigen Sie das Passwort"
                },
                "fr-FR": {
                  singular: "Veuillez confirmer le mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを確認してください"
                },
                "ko-KR": {
                  singular: "비밀번호를 확인해 주세요."
                },
                "pt-BR": {
                  singular: "Confirme a senha"
                },
                "zh-CN": {
                  singular: "请确认密码"
                }
              }
            })), _v39({
              has_error_password_missmatch: ""
            }), _v34?.("password_mismatch");
            return;
          }
          _v43(!1);
          let _v2 = `name=${_v0.name}&email=${encodeURIComponent(_v0.email)}&password=${encodeURIComponent(_v0.password)}&token=${_v0}&action=join&service=${_v24 ? "google_identity_platform" : "vimeo"}&marketing_opt_in=${_v1}&recaptcha_enterprise_token=${_v48}&turnstile_token=${_v25}&self_certified_over_eighteen=${_v0.overEighteenCertification}`;
          _v4 && (_v2 += `&redirect=${encodeURIComponent(_v4)}`), _v16 && (_v2 += `&source=${encodeURIComponent(_v16)}`);
          let _v3 = !1;
          if (_v24) {
            let {
                ERROR_CODES_TO_LOG: _v0,
                SIGNUP_ERROR_EMAIL_EXISTS: _v1,
                SIGNUP_ERROR_INVALID_EMAIL: _v2,
                SIGNUP_ERROR_WEAK_PASSWORD: _v3,
                GoogleIdentityPlatform: _v4
              } = await _v0.A(0),
              _v5 = new _v4();
            try {
              if (_v0.email && _v0.password) {
                let _v0 = await _v5.signUpWithEmailAndPassword(_v0.email, _v0.password);
                _v2 += `&gip_id_token=${_v0._tokenResponse.idToken}&gip_uid=${_v0.user.uid}`;
              }
            } catch (_v0) {
              _v3 = !0;
              let _v1 = _v0.code,
                _v2 = (0, _v17.translate)({
                  singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
                  dictionary: {
                    es: {
                      singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
                    },
                    "de-DE": {
                      singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
                    },
                    "fr-FR": {
                      singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
                    },
                    "ko-KR": {
                      singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
                    },
                    "pt-BR": {
                      singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
                    },
                    "zh-CN": {
                      singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
                    }
                  }
                }),
                _v3 = "technical_error";
              _v1 === _v1 && (_v2 = (0, _v17.translate)({
                singular: "There is already a Vimeo user with this email address.",
                dictionary: {
                  es: {
                    singular: "Ya existe un usuario de Vimeo con esta dirección de correo electrónico."
                  },
                  "de-DE": {
                    singular: "Es gibt bereits einen Vimeo-Benutzer mit dieser E-Mail-Adresse."
                  },
                  "fr-FR": {
                    singular: "Il existe déjà un utilisateur Vimeo avec cette adresse e-mail."
                  },
                  "ja-JP": {
                    singular: "すでにこのメールアドレスをお使いのVimeoユーザーがいます。"
                  },
                  "ko-KR": {
                    singular: "이미 이 이메일 주소를 사용하는 Vimeo 사용자가 있습니다."
                  },
                  "pt-BR": {
                    singular: "Já existe um usuário do Vimeo com este endereço de e-mail."
                  },
                  "zh-CN": {
                    singular: "此电子邮件地址已有一位 Vimeo 用户使用。"
                  }
                }
              }), _v3 = "user_exists_on_registration"), _v1 === _v3 && (_v2 = (0, _v17.translate)({
                singular: "The password is too weak.",
                dictionary: {
                  es: {
                    singular: "La contraseña es demasiado insegura."
                  },
                  "de-DE": {
                    singular: "Das Passwort ist zu schwach."
                  },
                  "fr-FR": {
                    singular: "Le mot de passe est trop faible."
                  },
                  "ja-JP": {
                    singular: "パスワードが弱すぎます。"
                  },
                  "ko-KR": {
                    singular: "비밀번호가 너무 취약합니다."
                  },
                  "pt-BR": {
                    singular: "A senha é muito fraca."
                  },
                  "zh-CN": {
                    singular: "密码太弱。"
                  }
                }
              }), _v3 = "password_requirements_not_met"), _v1 == _v2 && (_v2 = (0, _v17.translate)({
                singular: "Please enter a valid email address.",
                dictionary: {
                  es: {
                    singular: "Introduce una dirección de correo electrónico válida."
                  },
                  "de-DE": {
                    singular: "Bitte gib eine gültige E-Mail-Adresse an."
                  },
                  "fr-FR": {
                    singular: "Veuillez saisir une adresse e-mail valide."
                  },
                  "ja-JP": {
                    singular: "有効な E メールアドレスを入力してください。"
                  },
                  "ko-KR": {
                    singular: "올바른 이메일 주소를 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Digite um endereço de e-mail válido."
                  },
                  "zh-CN": {
                    singular: "请输入有效的电子邮件地址。"
                  }
                }
              }), _v3 = "invalid_email"), _v37(_v2), _v39(_v1), _v34?.(_v3), _v0.includes(_v1);
            }
          }
          if (!_v3) try {
            let _v0 = await (0, _v28.Login)(_v2, "/join");
            if (_v0?.status === 429) {
              _v37((0, _v17.translate)({
                singular: "Sorry, but you have made too many attempts. Please wait a few minutes and try again.",
                dictionary: {
                  es: {
                    singular: "Lo sentimos, pero ha realizado demasiados intentos. Por favor, espere unos minutos e inténtelo de nuevo."
                  },
                  "de-DE": {
                    singular: "Sie haben leider zu viele Versuche unternommen. Bitte warten Sie ein paar Minuten und versuchen Sie es dann erneut."
                  },
                  "fr-FR": {
                    singular: "Désolé, mais vous avez effectué trop de tentatives. Veuillez patienter quelques minutes et réessayer."
                  },
                  "ja-JP": {
                    singular: "申し訳ありませんが、試行回数が多すぎます。数分待ってからもう一度お試しください。"
                  },
                  "ko-KR": {
                    singular: "죄송합니다. 시도 횟수가 너무 많습니다. 몇 분 후에 다시 시도해 주세요."
                  },
                  "pt-BR": {
                    singular: "Desculpe, mas você fez tentativas demais. Aguarde alguns minutos e tente novamente."
                  },
                  "zh-CN": {
                    singular: "抱歉，您尝试次数过多。请等待几分钟后再试。"
                  }
                }
              })), _v34?.("too_many_attempts");
              return;
            }
            _v0?.signup && (_v50(_v1, "Email", {
              user_id: _v0.vimeo_cur_user?.id?.toString()
            }), (0, _v15.sendGTMEvent)({
              event: "register",
              "register.ref_page": document.referrer,
              "register.form_page": document.location.href,
              "register.is_mobile_device": _v52,
              "register.vuid": (0, _v14.loadCookie)("vuid") || "",
              "register.country_code": _v49?.location || ""
            })), _v6 && _v6(_v0);
          } catch (_v0) {
            let _v1 = (0, _v17.translate)({
                singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
                dictionary: {
                  es: {
                    singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
                  },
                  "de-DE": {
                    singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
                  },
                  "fr-FR": {
                    singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
                  },
                  "ko-KR": {
                    singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
                  },
                  "pt-BR": {
                    singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
                  },
                  "zh-CN": {
                    singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
                  }
                }
              }),
              _v2 = "technical_error";
            for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0) && 0 !== _v0.indexOf("has_error_")) {
              _v1 = _v0[_v0];
              break;
            }
            if ((_v19 && !_v0.hasOwnProperty("has_error_invalid_email") && _v0.hasOwnProperty("email") || _v0.hasOwnProperty("new_password") || _v0.hasOwnProperty("display_name")) && (_v1 = (0, _v17.translate)({
              singular: "Please enter your name, email, and password",
              dictionary: {
                es: {
                  singular: "Introduzca su nombre, correo electrónico y contraseña"
                },
                "de-DE": {
                  singular: "Bitte gib deinen Namen, E-Mail und Kennwort ein"
                },
                "fr-FR": {
                  singular: "Veuillez saisir votre nom, e-mail et mot de passe"
                },
                "ja-JP": {
                  singular: "あなたの名前、メールアドレス、およびパスワードを入力してください"
                },
                "ko-KR": {
                  singular: "이름, 이메일, 비밀번호를 입력하세요"
                },
                "pt-BR": {
                  singular: "Por favor, digite seu nome, e-mail e senha"
                },
                "zh-CN": {
                  singular: "请输入您的姓名、电子邮件和密码"
                }
              }
            }), _v2 = "missing_fields"), _v0.has_error_user_exists && (_v1 = (0, _v17.translate)({
              singular: "There is already a Vimeo user with this email address.",
              dictionary: {
                es: {
                  singular: "Ya existe un usuario de Vimeo con esta dirección de correo electrónico."
                },
                "de-DE": {
                  singular: "Es gibt bereits einen Vimeo-Benutzer mit dieser E-Mail-Adresse."
                },
                "fr-FR": {
                  singular: "Il existe déjà un utilisateur Vimeo avec cette adresse e-mail."
                },
                "ja-JP": {
                  singular: "すでにこのメールアドレスをお使いのVimeoユーザーがいます。"
                },
                "ko-KR": {
                  singular: "이미 이 이메일 주소를 사용하는 Vimeo 사용자가 있습니다."
                },
                "pt-BR": {
                  singular: "Já existe um usuário do Vimeo com este endereço de e-mail."
                },
                "zh-CN": {
                  singular: "此电子邮件地址已有一位 Vimeo 用户使用。"
                }
              }
            }), _v2 = "user_exists_on_registration"), _v0.hasOwnProperty("has_captcha_error") && (_v1 = (0, _v17.translate)({
              singular: "Unable to verify CAPTCHA. Please try again or visit the {A}Support Center{/A} for help.",
              replacements: {
                A: _v0 => (0, _v1.jsx)("a", {
                  href: "https://vimeo.com/help/contact",
                  target: "_blank",
                  rel: "noreferrer",
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
            }), _v2 = "captcha_error"), _v37(_v1), _v39(_v0), _v0.hasOwnProperty("email_verification_required")) {
              _v37(null), _v28 && _v29 && (_v28(!1), _v29(!0));
              return;
            }
            _v34?.(_v2);
          }
        }
      }),
      _v58 = (0, _v16.useField)(_v57, "name"),
      _v59 = (0, _v16.useField)(_v57, "email"),
      _v60 = (0, _v16.useField)(_v57, "password"),
      _v61 = (0, _v16.useField)(_v57, "confirmPassword"),
      _v62 = (0, _v16.useField)(_v57, "overEighteenCertification"),
      _v63 = _v0 => {
        _v59.iris.onChange(_v0), _v37(null), _v7 && _v7(_v0.target.value);
      },
      _v64 = _v11 ? {
        placeholder: _v11.name
      } : {
        label: (0, _v17.translate)({
          singular: "Name",
          dictionary: {
            es: {
              singular: "Nombre"
            },
            "fr-FR": {
              singular: "Nom"
            },
            "ja-JP": {
              singular: "名前"
            },
            "ko-KR": {
              singular: "이름"
            },
            "pt-BR": {
              singular: "Nome"
            },
            "zh-CN": {
              singular: "姓名"
            }
          }
        })
      },
      _v65 = _v11 ? {
        placeholder: _v11.email
      } : {
        label: (0, _v17.translate)({
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
        })
      },
      _v66 = _v11 ? {
        placeholder: _v11.password
      } : {
        label: (0, _v17.translate)({
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
      },
      _v67 = _v31 && (_v38.hasOwnProperty("has_error_password_missmatch") || _v38.hasOwnProperty("has_error_user_exists") || _v38.hasOwnProperty("has_error_invalid_email")),
      _v68 = {
        _hover: {
          cursor: "pointer"
        },
        color: "text-secondary"
      },
      _v69 = _v60.iris.value ? (0, _v2.zxcvbn)(_v60.iris.value.slice(0, _v24.MAX_PASSWORD_LENGTH)).score : void 0,
      _v70 = _v32?.desktopTermsMarginTop != null ? (0, _v3.rem)(_v32.desktopTermsMarginTop - 12 * !!_v31) : void 0,
      _v71 = _v35 ? (0, _v1.jsx)(_v7.Button, {
        w: "100%",
        type: "submit",
        variant: "brand",
        size: "lg",
        isLoading: _v57.submitting,
        isDisabled: _v57.submitting,
        children: _v13
      }) : (0, _v1.jsx)(_v29.ContinueButton, {
        disabled: !_v19 && !_v57.valid,
        loading: _v57.submitting,
        onClick: () => {
          (0, _v25.trackFinishAuthFlow)({
            ..._v30
          }), (0, _v25.trackRegistration)("password", _v5), _v31 ? (0, _v25.trackJoinPageClickRegFlow0625)({
            location: "join_page_step_2",
            event_name: "join_with_email",
            copy: "join_with_email",
            target: "email_auth_join",
            password_strength_score: _v69
          }) : (0, _v25.trackJoinWithEmailClick)(!!_v22, _v4);
        },
        pill: _v14,
        format: _v19 ? "basic" : void 0,
        className: _v21,
        "data-testid": "join-continue-button",
        children: _v13
      });
    return (0, _v1.jsxs)(_v29.Form, {
      onSubmit: _v57.handleSubmit,
      noValidate: !0,
      style: {
        gap: _v31 ? "12px" : "",
        ...(_v32?.active ? {
          flexGrow: 1
        } : {})
      },
      onChange: () => {
        _v31 && (_v39({}), _v37(null));
      },
      children: [_v32?.active && (0, _v1.jsx)(_v6.Box, {
        marginTop: "auto"
      }), _v33, _v31 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v22 ? null : (0, _v1.jsxs)(_v23.InputWrapper, {
          formFieldErrorMessage: _v36,
          isInvalid: _v38.hasOwnProperty("has_error_user_exists") || _v38.hasOwnProperty("has_error_invalid_email"),
          children: [(0, _v1.jsx)(_v23.StyledInput, {
            isRequired: !0,
            order: _v15?.email,
            id: "email_login",
            autoComplete: "email",
            ..._v59.iris,
            isDisabled: _v8,
            onChange: _v63
          }), (0, _v1.jsx)(_v23.Label, {
            htmlFor: "email_login",
            children: _v65.placeholder
          })]
        }), _v23 ? null : (0, _v1.jsxs)(_v23.InputWrapper, {
          children: [(0, _v1.jsx)(_v23.StyledInput, {
            isRequired: !0,
            order: _v15?.name,
            id: "name",
            type: "text",
            autoComplete: "name",
            ..._v58.iris,
            autoFocus: !0
          }), (0, _v1.jsx)(_v23.Label, {
            htmlFor: "name",
            children: _v64.placeholder
          })]
        }), (0, _v1.jsx)(_v23.InputWrapper, {
          formFieldErrorMessage: _v36,
          isInvalid: _v38.hasOwnProperty("has_error_password_missmatch"),
          children: (0, _v1.jsxs)(_v8.InputGroup, {
            children: [(0, _v1.jsx)(_v23.StyledInput, {
              isRequired: !0,
              order: _v15?.password,
              id: "password_login",
              type: _v42 ? "text" : "password",
              autoComplete: "new-password",
              ..._v60.iris,
              onChange: _v0 => {
                _v60.iris.onChange(_v0), _v41(!_v0.target.value);
              }
            }), (0, _v1.jsx)(_v23.Label, {
              htmlFor: "password_login",
              children: _v66.placeholder
            }), (0, _v1.jsx)(_v9.InputRightElement, {
              children: (0, _v1.jsx)(_v12.EyeShut, {
                ..._v68,
                onClick: () => _v43(!_v42)
              })
            })]
          })
        }), (0, _v1.jsxs)(_v10.Collapse, {
          style: {
            overflow: "visible"
          },
          enterDuration: "2xl",
          exitDuration: "2xl",
          in: !_v40 && _v31,
          unmountOnExit: !0,
          children: [(0, _v1.jsx)(_v23.InputWrapper, {
            children: (0, _v1.jsxs)(_v8.InputGroup, {
              children: [(0, _v1.jsx)(_v23.StyledInput, {
                isRequired: !0,
                order: _v15?.confirmPassword,
                id: "confirm_password_login",
                type: _v44 ? "text" : "password",
                autoComplete: "new-password",
                ..._v61.iris
              }), (0, _v1.jsx)(_v23.Label, {
                htmlFor: "confirm_password_login",
                children: (0, _v17.translate)({
                  singular: "Confirm password",
                  dictionary: {
                    es: {
                      singular: "Confirmar contraseña"
                    },
                    "de-DE": {
                      singular: "Kennwort bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer le mot de passe"
                    },
                    "ja-JP": {
                      singular: "パスワードを確認"
                    },
                    "ko-KR": {
                      singular: "비밀번호 확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar senha"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v9.InputRightElement, {
                children: (0, _v1.jsx)(_v12.EyeShut, {
                  ..._v68,
                  onClick: () => _v45(!_v44)
                })
              })]
            })
          }), (0, _v1.jsx)(_v6.Box, {
            marginTop: (0, _v3.rem)(12),
            children: (0, _v1.jsx)(_v27.PasswordStrengthIndicator, {
              passwordScore: _v69
            })
          }), (0, _v1.jsx)(_v6.Box, {
            marginTop: (0, _v3.rem)(12),
            children: (0, _v1.jsx)(_v11.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v55
            })
          })]
        }), _v36 && !_v67 && (0, _v1.jsx)(_v29.FormSection, {
          children: (0, _v1.jsx)(_v29.Notice, {
            format: "negative",
            children: (0, _v1.jsx)(_v18.Paragraph, {
              size: "3",
              children: _v36
            })
          })
        }), !_v19 && (0, _v1.jsx)(_v6.Box, {
          as: "section",
          mx: "auto",
          my: (0, _v3.rem)(10),
          display: _v27 ? "block" : "none",
          children: (0, _v1.jsx)("div", {
            id: "turnstile-container"
          })
        }), _v19 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v20, (0, _v1.jsx)(_v26.AgeCertificationCheckbox, {
            overEighteenCertification: _v62.input.value,
            setOverEighteenCertification: _v62.handlers.setValue,
            setError: _v37,
            isFullScreen: _v31,
            shouldShowAgeCertification: _v51,
            isInvalid: _v46,
            setAgeCertificationInvalid: _v47
          }), _v17 && (0, _v1.jsxs)(_v29.FormSection, {
            className: "termsandconditions",
            children: [(0, _v1.jsx)(_v11.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v17
            }), _v18 && (0, _v1.jsx)(_v11.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v18
            })]
          })]
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v23 ? null : (0, _v1.jsx)(_v29.Input, {
          inputFieldVariant: _v9,
          formType: _v12,
          order: _v15?.name,
          ..._v64,
          "aria-label": (0, _v17.translate)({
            singular: "First and last name",
            dictionary: {
              es: {
                singular: "Nombre y apellido"
              },
              "de-DE": {
                singular: "Vor- und Nachname"
              },
              "fr-FR": {
                singular: "Nom et prénom"
              },
              "ja-JP": {
                singular: "お名前"
              },
              "ko-KR": {
                singular: "성과 이름"
              },
              "pt-BR": {
                singular: "Nome e sobrenome"
              },
              "zh-CN": {
                singular: "名字和姓氏"
              }
            }
          }),
          autoComplete: "name",
          id: "name",
          type: "text",
          ..._v58.iris
        }), _v22 ? null : (0, _v1.jsx)(_v29.Input, {
          inputFieldVariant: _v9,
          emailRef: _v10,
          formType: _v12,
          order: _v15?.email,
          ..._v65,
          "aria-label": (0, _v17.translate)({
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
          id: "email_login",
          ..._v59.iris,
          disabled: _v8,
          onChange: _v63
        }), (0, _v1.jsx)(_v29.Input, {
          inputFieldVariant: _v9,
          formType: _v12,
          order: _v15?.password,
          id: "password_login",
          ..._v66,
          "aria-label": (0, _v17.translate)({
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
          autoComplete: "new-password",
          type: "password",
          ..._v60.iris
        }), _v36 && (0, _v1.jsx)(_v29.FormSection, {
          children: (0, _v1.jsx)(_v29.Notice, {
            format: "negative",
            children: (0, _v1.jsx)(_v18.Paragraph, {
              size: "3",
              children: _v36
            })
          })
        }), !_v19 && (0, _v1.jsx)(_v6.Box, {
          as: "section",
          mx: "auto",
          my: (0, _v3.rem)(10),
          display: _v27 ? "block" : "none",
          children: (0, _v1.jsx)("div", {
            id: "turnstile-container"
          })
        }), _v19 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v20, (0, _v1.jsx)(_v26.AgeCertificationCheckbox, {
            overEighteenCertification: _v62.input.value,
            setOverEighteenCertification: _v62.handlers.setValue,
            setError: _v37,
            isFullScreen: _v31,
            shouldShowAgeCertification: _v51,
            isInvalid: _v46,
            setAgeCertificationInvalid: _v47
          }), _v17 && (0, _v1.jsxs)(_v29.FormSection, {
            className: "termsandconditions",
            children: [(0, _v1.jsx)(_v18.Paragraph, {
              format: "soft",
              size: "3",
              children: _v17
            }), _v18 && (0, _v1.jsx)(_v18.Paragraph, {
              size: "3",
              children: _v18
            })]
          })]
        })]
      }), _v32 ? (0, _v1.jsx)(_v21.MobileStickyFooter, {
        active: _v32.active,
        background: _v32.background,
        terms: _v32.terms,
        desktopMarginTop: _v70,
        children: _v71
      }) : (0, _v1.jsx)("section", {
        children: _v71
      })]
    });
  }]);
}