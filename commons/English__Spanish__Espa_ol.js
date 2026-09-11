{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v2.Locales.en,
    _v5 = [{
      code: _v2.Locales.en,
      englishName: "English",
      nativeName: "English"
    }, {
      code: _v2.Locales.es,
      englishName: "Spanish",
      nativeName: "Español"
    }, {
      code: _v2.Locales.pt,
      englishName: "Brazilian Portuguese",
      nativeName: "Português do Brasil"
    }, {
      code: _v2.Locales.de,
      englishName: "German",
      nativeName: "Deutsch"
    }, {
      code: _v2.Locales.fr,
      englishName: "French",
      nativeName: "Français"
    }, {
      code: _v2.Locales.ja,
      englishName: "Japanese",
      nativeName: "日本語"
    }, {
      code: _v2.Locales.zh,
      englishName: "Simplified Chinese",
      nativeName: "简体中文"
    }, {
      code: _v2.Locales.ko,
      englishName: "Korean",
      nativeName: "한국어"
    }],
    _v6 = _v5.length - 1,
    _v7 = _v0 => ({
      cid: _v0.cid,
      name: _v0.name,
      type: _v0.type,
      metadata: {
        description: _v0.metadata?.description,
        options: _v0.metadata?.options?.map(({
          optionLabel: _v0,
          optionPosition: _v1,
          optionCid: _v2
        }) => ({
          optionLabel: _v0,
          optionPosition: _v1,
          optionCid: _v2
        }))
      }
    }),
    _v8 = _v0 => ({
      joinPageTitle: _v0.joinPageTitle.tagsUnresolved ?? _v0.joinPageTitle.tagsResolved,
      loginPageTitle: _v0.loginPageTitle.tagsUnresolved ?? _v0.loginPageTitle.tagsResolved,
      confirmationPageTitle: _v0.confirmationPageTitle.tagsUnresolved ?? _v0.confirmationPageTitle.tagsResolved,
      confirmationPageDescription: _v0.confirmationPageDescription.tagsUnresolved ?? _v0.confirmationPageDescription.tagsResolved,
      primaryButtonStyle: _v0.primaryButtonStyle,
      secondaryButtonStyle: _v0.secondaryButtonStyle,
      customFields: _v0.customFields.map(_v7),
      hiddenFields: _v0.hiddenFields.map(_v7)
    }),
    _v9 = new Set(["utm_source", "utm_campaign", "utm_term", "utm_content", "utm_medium"]),
    _v10 = ["Register to attend", "Sign up", "Sign in", "You're registered for this event", "Thanks for signing up", "We’ll see you here when the event begins.", "Your information was submitted."],
    _v11 = new Set(["Register", "Sign up", "Sign in", "Log In", "Log in", "Next", "Back"]),
    _v12 = _v0 => _v0.replace(/<[^>]*>/g, " ").replace(/{{[^}]*}}/g, "").replace(/&#0?39;|&apos;/g, "'").replace(/\s+/g, " ").trim(),
    _v13 = new Set(_v10.map(_v12)),
    _v14 = _v0 => _v13.has(_v12(_v0)),
    _v15 = [["joinPageTitle", "join_page_title"], ["loginPageTitle", "login_page_title"], ["confirmationPageTitle", "confirmation_page_title"], ["confirmationPageDescription", "confirmation_page_description"]],
    _v16 = [["primaryButtonStyle", _v3.BUTTON_TEXT_TYPE.REGISTER, "primary_button_style.register_button_text"], ["primaryButtonStyle", _v3.BUTTON_TEXT_TYPE.NEXT, "primary_button_style.next_button_text"], ["primaryButtonStyle", _v3.BUTTON_TEXT_TYPE.LOGIN, "primary_button_style.login_button_text"], ["secondaryButtonStyle", _v3.BUTTON_TEXT_TYPE.BACK, "secondary_button_style.back_button_text"]],
    _v17 = _v0 => _v0.replace(/[^a-z0-9]/gi, "").toLowerCase(),
    _v18 = Object.fromEntries(_v5.map(({
      code: _v0
    }) => [_v17(_v0), _v0])),
    _v19 = _v0 => Array.isArray(_v0) ? _v0.map(_v19) : null == _v0 || "object" != typeof _v0 ? _v0 : Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [_v18[_v17(_v0)] ?? _v0, _v19(_v1)])),
    _v20 = (_v0, _v1) => null != _v0 && _v14(_v0) ? ((_v0, _v1) => {
      for (let _v0 of _v10) for (let _v0 of [_v0, _v0.replaceAll("'", "&#039;")]) if (_v0.includes(_v0)) return _v0.replace(_v0, _v22(_v0, _v1));
      return _v0;
    })(_v0, _v1) : null,
    _v21 = (_v0, _v1) => {
      switch (_v0) {
        case "Register":
          return (0, _v1.translate)({
            singular: "Register",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Registrarse"
              },
              "de-DE": {
                singular: "Registrieren"
              },
              "fr-FR": {
                singular: "S'inscrire"
              },
              "ja-JP": {
                singular: "登録"
              },
              "ko-KR": {
                singular: "등록"
              },
              "pt-BR": {
                singular: "Inscrever-se"
              },
              "zh-CN": {
                singular: "报名"
              }
            }
          });
        case "Sign up":
          return (0, _v1.translate)({
            singular: "Sign up",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Regístrate"
              },
              "de-DE": {
                singular: "Registrieren"
              },
              "fr-FR": {
                singular: "Inscrivez-vous"
              },
              "ja-JP": {
                singular: "サインアップ"
              },
              "ko-KR": {
                singular: "가입하기"
              },
              "pt-BR": {
                singular: "Inscreva-se"
              },
              "zh-CN": {
                singular: "注册"
              }
            }
          });
        case "Sign in":
        case "Log In":
        case "Log in":
          return (0, _v1.translate)({
            singular: "Sign in",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Ingresar"
              },
              "de-DE": {
                singular: "Anmelden"
              },
              "fr-FR": {
                singular: "Se connecter"
              },
              "ja-JP": {
                singular: "サインイン"
              },
              "ko-KR": {
                singular: "로그인"
              },
              "pt-BR": {
                singular: "Entrar"
              },
              "zh-CN": {
                singular: "登录"
              }
            }
          });
        case "Next":
          return (0, _v1.translate)({
            singular: "Next",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Siguiente"
              },
              "de-DE": {
                singular: "Weiter"
              },
              "fr-FR": {
                singular: "Suivant"
              },
              "ja-JP": {
                singular: "次へ"
              },
              "ko-KR": {
                singular: "다음"
              },
              "pt-BR": {
                singular: "Próxima"
              },
              "zh-CN": {
                singular: "下一步"
              }
            }
          });
        case "Back":
          return (0, _v1.translate)({
            singular: "Back",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Atrás"
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
                singular: "뒤로"
              },
              "pt-BR": {
                singular: "Voltar"
              },
              "zh-CN": {
                singular: "返回"
              }
            }
          });
        default:
          return _v0;
      }
    },
    _v22 = (_v0, _v1) => {
      switch (_v0) {
        case "Register to attend":
          return (0, _v1.translate)({
            singular: "Register to attend",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Registrarse para asistir"
              },
              "de-DE": {
                singular: "Für die Teilnahme registrieren"
              },
              "fr-FR": {
                singular: "S'inscrire pour assister à l'événement"
              },
              "ja-JP": {
                singular: "参加登録"
              },
              "ko-KR": {
                singular: "참석 등록"
              },
              "pt-BR": {
                singular: "Inscrever-se para participar"
              },
              "zh-CN": {
                singular: "报名参加"
              }
            }
          });
        case "Sign up":
          return (0, _v1.translate)({
            singular: "Sign up",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Regístrate"
              },
              "de-DE": {
                singular: "Registrieren"
              },
              "fr-FR": {
                singular: "Inscrivez-vous"
              },
              "ja-JP": {
                singular: "サインアップ"
              },
              "ko-KR": {
                singular: "가입하기"
              },
              "pt-BR": {
                singular: "Inscreva-se"
              },
              "zh-CN": {
                singular: "注册"
              }
            }
          });
        case "Sign in":
          return (0, _v1.translate)({
            singular: "Sign in",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Ingresar"
              },
              "de-DE": {
                singular: "Anmelden"
              },
              "fr-FR": {
                singular: "Se connecter"
              },
              "ja-JP": {
                singular: "サインイン"
              },
              "ko-KR": {
                singular: "로그인"
              },
              "pt-BR": {
                singular: "Entrar"
              },
              "zh-CN": {
                singular: "登录"
              }
            }
          });
        case "You're registered for this event":
          return (0, _v1.translate)({
            singular: "You're registered for this event",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Está registrado en este evento"
              },
              "de-DE": {
                singular: "Sie sind für diese Veranstaltung registriert"
              },
              "fr-FR": {
                singular: "Vous êtes inscrit à cet événement."
              },
              "ja-JP": {
                singular: "このイベントに登録されています。"
              },
              "ko-KR": {
                singular: "이 이벤트에 등록되었습니다."
              },
              "pt-BR": {
                singular: "Você está inscrito neste evento"
              },
              "zh-CN": {
                singular: "您已注册参加此活动"
              }
            }
          });
        case "Thanks for signing up":
          return (0, _v1.translate)({
            singular: "Thanks for signing up",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Gracias por registrarse"
              },
              "de-DE": {
                singular: "Danke für Ihre Anmeldung"
              },
              "fr-FR": {
                singular: "Merci pour votre inscription"
              },
              "ja-JP": {
                singular: "ご登録ありがとうございます"
              },
              "ko-KR": {
                singular: "등록해 주셔서 감사합니다"
              },
              "pt-BR": {
                singular: "Obrigado por se inscrever"
              },
              "zh-CN": {
                singular: "感谢您的报名"
              }
            }
          });
        case "We’ll see you here when the event begins.":
          return (0, _v1.translate)({
            singular: "We’ll see you here when the event begins.",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Le esperamos aquí cuando comience el evento."
              },
              "de-DE": {
                singular: "Wir sehen uns hier, wenn die Veranstaltung beginnt."
              },
              "fr-FR": {
                singular: "Nous vous retrouverons ici lorsque l'événement commencera."
              },
              "ja-JP": {
                singular: "イベント開始時にこちらでお待ちしています。"
              },
              "ko-KR": {
                singular: "행사가 시작되면 여기서 뵙겠습니다."
              },
              "pt-BR": {
                singular: "Nos vemos aqui quando o evento começar."
              },
              "zh-CN": {
                singular: "活动开始时我们会在这里等您。"
              }
            }
          });
        case "Your information was submitted.":
          return (0, _v1.translate)({
            singular: "Your information was submitted.",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Su información ha sido enviada."
              },
              "de-DE": {
                singular: "Ihre Angaben wurden übermittelt."
              },
              "fr-FR": {
                singular: "Vos informations ont été soumises."
              },
              "ja-JP": {
                singular: "情報が送信されました。"
              },
              "ko-KR": {
                singular: "정보가 제출되었습니다."
              },
              "pt-BR": {
                singular: "Suas informações foram enviadas."
              },
              "zh-CN": {
                singular: "您的信息已提交。"
              }
            }
          });
        default:
          return _v0;
      }
    },
    _v23 = (_v0, _v1) => {
      switch (_v0) {
        case "Email address":
          return (0, _v1.translate)({
            singular: "Email address",
            locale: _v1,
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
          });
        case "First name":
          return (0, _v1.translate)({
            singular: "First name",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Nombre"
              },
              "de-DE": {
                singular: "Vorname"
              },
              "fr-FR": {
                singular: "Prénom"
              },
              "ja-JP": {
                singular: "名"
              },
              "ko-KR": {
                singular: "이름"
              },
              "pt-BR": {
                singular: "Nome"
              },
              "zh-CN": {
                singular: "名字"
              }
            }
          });
        case "Last name":
          return (0, _v1.translate)({
            singular: "Last name",
            locale: _v1,
            dictionary: {
              es: {
                singular: "Apellidos"
              },
              "de-DE": {
                singular: "Nachname"
              },
              "fr-FR": {
                singular: "Nom"
              },
              "ja-JP": {
                singular: "姓"
              },
              "ko-KR": {
                singular: "성"
              },
              "pt-BR": {
                singular: "Sobrenome"
              },
              "zh-CN": {
                singular: "姓氏"
              }
            }
          });
        default:
          return _v0;
      }
    },
    _v24 = (_v0, _v1, _v2, _v3) => ({
      ..._v0,
      [_v1]: {
        ..._v0?.[_v1],
        [_v2]: {
          tagsResolved: _v0?.[_v1]?.[_v2]?.tagsResolved ?? _v3,
          tagsUnresolved: _v3
        }
      }
    }),
    _v25 = (_v0, _v1, _v2, _v3) => ({
      ..._v0,
      [_v1]: {
        ..._v0?.[_v1],
        [_v2]: _v3
      }
    }),
    _v26 = (_v0, _v1) => {
      if (null == _v0 || 0 === _v1.length) return _v0 ?? {};
      let _v2 = new Set(_v1.map(String));
      return Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [_v0, Object.fromEntries(Object.entries(_v1 ?? {}).filter(([_v0]) => !_v2.has(_v0)))]).filter(([, _v0]) => Object.keys(_v0).length > 0));
    },
    _v27 = (_v0, _v1) => _v26(_v0, _v1),
    _v28 = (_v0, _v1) => _v26(_v0, _v1),
    _v29 = (_v0, _v1, _v2) => {
      let _v3 = _v0.localizations?.options ?? [],
        _v4 = [..._v3.filter(({
          optionCid: _v0
        }) => !_v2.some(({
          optionCid: _v0
        }) => _v0 === _v0)), ..._v2.map(_v0 => _v0.optionCid ? {
          ..._v3.find(({
            optionCid: _v0
          }) => _v0 === _v0.optionCid),
          optionCid: _v0.optionCid,
          optionPosition: _v0.optionPosition,
          [_v1]: _v0.optionLabel
        } : null).filter(_v0 => null !== _v0)];
      return {
        ..._v0,
        localizations: {
          ..._v0.localizations,
          options: _v4
        }
      };
    },
    _v30 = (_v0, _v1) => {
      if (null == _v0.localizations || 0 === _v1.length) return _v0;
      let _v2 = new Set(_v1),
        _v3 = _v0 => Object.fromEntries(Object.entries(_v0).filter(([_v0]) => !_v2.has(_v0))),
        _v4 = _v0.localizations.name ? _v3(_v0.localizations.name) : void 0,
        _v5 = _v0.localizations.description ? _v3(_v0.localizations.description) : void 0,
        _v6 = _v0.localizations.options?.map(_v3).filter(_v0 => Object.keys(_v0).some(_v0 => "optionCid" !== _v0 && "optionPosition" !== _v0)),
        _v7 = Object.keys(_v4 ?? {}).length > 0 || Object.keys(_v5 ?? {}).length > 0 || (_v6?.length ?? 0) > 0;
      return {
        ..._v0,
        localizations: _v7 ? {
          name: _v4,
          description: _v5,
          options: _v6
        } : null
      };
    },
    _v31 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v0[_v3];
      if (null == _v4) return {
        base: _v1,
        values: _v0
      };
      let {
        [_v3]: _v5,
        ..._v6
      } = {
        ..._v0,
        [_v2]: _v1
      };
      return {
        base: _v4,
        values: _v6
      };
    },
    _v32 = (_v0, _v1, _v2) => {
      if (null == _v0.localizations) return _v0;
      let _v3 = _v0.localizations.name ? _v31(_v0.localizations.name, _v0.name, _v1, _v2) : null,
        _v4 = _v0.localizations.description && _v0.metadata?.description != null ? _v31(_v0.localizations.description, _v0.metadata.description, _v1, _v2) : null,
        _v5 = _v0.localizations.options?.map(_v0 => {
          let _v1 = _v0.metadata?.options?.find(({
            optionCid: _v0
          }) => _v0 === _v0.optionCid);
          if (null == _v1) return _v0;
          let {
            optionCid: _v2,
            optionPosition: _v3,
            ..._v4
          } = _v0;
          return {
            ..._v31(_v4, _v1.optionLabel, _v1, _v2).values,
            optionCid: _v2,
            optionPosition: _v3
          };
        });
      return {
        ..._v0,
        ...(_v3 ? {
          name: _v3.base
        } : {}),
        metadata: _v0.metadata ? {
          ..._v0.metadata,
          ...(_v4 ? {
            description: _v4.base
          } : {}),
          options: _v0.metadata.options?.map(_v0 => {
            let _v1 = _v0.localizations?.options?.find(({
              optionCid: _v0
            }) => _v0 === _v0.optionCid);
            return _v1?.[_v2] == null ? _v0 : {
              ..._v0,
              optionLabel: _v1[_v2]
            };
          })
        } : _v0.metadata,
        localizations: {
          ..._v0.localizations,
          ...(_v3 ? {
            name: _v3.values
          } : {}),
          ...(_v4 ? {
            description: _v4.values
          } : {}),
          options: _v5
        }
      };
    },
    _v33 = _v0 => null != _v0 && "object" == typeof _v0 && !Array.isArray(_v0),
    _v34 = {
      join_page_title: "joinPageTitle",
      login_page_title: "loginPageTitle",
      confirmation_page_title: "confirmationPageTitle",
      confirmation_page_description: "confirmationPageDescription"
    },
    _v35 = {
      "primary_button_style.register_button_text": _v3.BUTTON_TEXT_TYPE.REGISTER,
      "primary_button_style.next_button_text": _v3.BUTTON_TEXT_TYPE.NEXT,
      "primary_button_style.login_button_text": _v3.BUTTON_TEXT_TYPE.LOGIN,
      "secondary_button_style.back_button_text": _v3.BUTTON_TEXT_TYPE.BACK
    };
  _v0.s(["FALLBACK_LOCALE", 0, _v4, "LANGUAGE_OPTIONS", 0, _v5, "TOTAL_LANGUAGES", 0, _v6, "applyTranslations", 0, (_v0, _v1, _v2) => Object.entries(_v1).reduce((_v0, [_v1, _v2]) => ((_v0, _v1, _v2, _v3) => {
    let _v4 = _v34[_v1];
    if (_v4) return {
      ..._v0,
      htmlLocalizations: _v24(_v0.htmlLocalizations, _v4, _v2, _v3)
    };
    let _v5 = _v35[_v1];
    if (_v5) return {
      ..._v0,
      buttonLocalizations: _v25(_v0.buttonLocalizations, _v5, _v2, _v3)
    };
    let _v6 = /^(custom_fields|hidden_fields)\.(\d+)\.(name|description)$/.exec(_v1);
    if (_v6) {
      let [, _v0, _v1, _v2] = _v6,
        _v3 = ("custom_fields" === _v0 ? _v0.customFields : _v0.hiddenFields).map(_v0 => String(_v0.cid) !== _v1 ? _v0 : {
          ..._v0,
          localizations: {
            ..._v0.localizations,
            ["name" === _v2 ? "name" : "description"]: {
              ..._v0.localizations?.["name" === _v2 ? "name" : "description"],
              [_v2]: _v3
            }
          }
        });
      return "custom_fields" === _v0 ? {
        ..._v0,
        customFields: _v3
      } : {
        ..._v0,
        hiddenFields: _v3
      };
    }
    let _v7 = /^(custom_fields|hidden_fields)\.(\d+)\.options\.(.+)$/.exec(_v1);
    if (_v7) {
      let [, _v0, _v1, _v2] = _v7,
        _v3 = ("custom_fields" === _v0 ? _v0.customFields : _v0.hiddenFields).map(_v0 => {
          let _v1;
          return String(_v0.cid) === _v1 ? (_v1 = _v0.metadata?.options?.find(({
            optionCid: _v0
          }) => String(_v0) === _v2)) ? _v29(_v0, _v2, [{
            ..._v1,
            optionLabel: _v3
          }]) : _v0 : _v0;
        });
      return "custom_fields" === _v0 ? {
        ..._v0,
        customFields: _v3
      } : {
        ..._v0,
        hiddenFields: _v3
      };
    }
    return _v0;
  })(_v0, _v1, _v2, _v2), _v0), "buildEnglishDraft", 0, _v8, "buildTranslationStrings", 0, _v0 => {
    let _v1 = _v8(_v0),
      _v2 = {};
    _v15.forEach(([_v0, _v1]) => {
      let _v2,
        _v3 = _v1[_v0];
      "" === _v3 || _v14(_v3) || (_v2 = _v0.defaultLocale, _v10.some(_v0 => _v12(_v3) === _v12(_v22(_v0, _v2)))) || (_v2[_v1] = _v3);
    }), _v16.forEach(([_v0, _v1, _v2]) => {
      let _v3,
        _v4 = _v1[_v0][_v1];
      "string" != typeof _v4 || "" === _v4 || _v11.has(_v4) || (_v3 = _v0.defaultLocale, [..._v11].some(_v0 => _v4 === _v21(_v0, _v3))) || (_v2[_v2] = _v4);
    });
    let _v3 = (_v0, _v1) => {
      _v0.forEach(_v0 => {
        let _v1, _v2;
        if (_v0.type === _v3.CustomFieldTypes.Checkbox) {
          let _v0 = _v0.metadata?.description;
          null != _v0 && "" !== _v0 && (_v2[`${_v1}.${_v0.cid}.description`] = _v0);
          return;
        }
        "" === _v0.name || _v9.has(_v0.name) || Object.values(_v3.FORM_FIELD_NAME_VALUES).includes(_v0.name) || (_v1 = _v0.name, _v2 = _v0.defaultLocale, Object.values(_v3.FORM_FIELD_NAME_VALUES).some(_v0 => _v1 === _v23(_v0, _v2))) || (_v2[`${_v1}.${_v0.cid}.name`] = _v0.name), _v0.type === _v3.CustomFieldTypes.Dropdown && _v0.metadata?.options?.forEach(_v0 => {
          "" !== _v0.optionLabel && null != _v0.optionCid && (_v2[`${_v1}.${_v0.cid}.options.${_v0.optionCid}`] = _v0.optionLabel);
        });
      });
    };
    return _v3(_v0.customFields, "custom_fields"), _v3(_v0.hiddenFields, "hidden_fields"), Object.keys(_v2).length > 0 ? _v2 : null;
  }, "canonicalizeLocaleKeys", 0, _v19, "flattenHtmlLocalizations", 0, _v0 => Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [_v0, Object.fromEntries(Object.entries(_v1 ?? {}).map(([_v0, _v1]) => [_v0, _v1.tagsUnresolved ?? ""]))])), "getLanguageEnglishName", 0, _v0 => _v5.find(_v0 => _v0.code.valueOf() === _v0)?.englishName ?? _v0, "getLanguageNativeName", 0, _v0 => _v5.find(_v0 => _v0.code.valueOf() === _v0)?.nativeName ?? _v0, "getLocalizedStockPageCopy", 0, _v20, "getTranslatedLocales", 0, (_v0, _v1, _v2) => _v5.filter(({
    code: _v0
  }) => _v0.some(({
    localizations: _v0
  }) => [_v0?.name, _v0?.description].some(_v0 => !!_v0?.[_v0]) || (_v0?.options ?? []).some(_v0 => !!_v0[_v0])) || Object.values(_v1 ?? {}).some(_v0 => _v0?.[_v0]?.tagsResolved) || Object.values(_v2 ?? {}).some(_v0 => _v0?.[_v0])).map(({
    code: _v0
  }) => _v0), "getViewerStrings", 0, _v0 => ({
    AddToCalendar: (0, _v1.translate)({
      singular: "Add to calendar",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Agregar al calendario"
        },
        "de-DE": {
          singular: "Zum Kalender hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter au calendrier"
        },
        "ja-JP": {
          singular: "カレンダーに追加"
        },
        "ko-KR": {
          singular: "캘린더에 추가"
        },
        "pt-BR": {
          singular: "Adicionar ao calendário"
        },
        "zh-CN": {
          singular: "添加到日历"
        }
      }
    }),
    ChangeLanguage: (0, _v1.translate)({
      singular: "Change language",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Cambiar idioma"
        },
        "de-DE": {
          singular: "Sprache ändern"
        },
        "fr-FR": {
          singular: "Changer la langue"
        },
        "ja-JP": {
          singular: "言語を変更"
        },
        "ko-KR": {
          singular: "언어 변경"
        },
        "pt-BR": {
          singular: "Alterar idioma"
        },
        "zh-CN": {
          singular: "更改语言"
        }
      }
    }),
    dateAtTime: (_v0, _v1) => (0, _v1.translate)({
      singular: "{DATE} at {TIME}",
      replacements: {
        DATE: _v0,
        TIME: _v1
      },
      locale: _v0,
      dictionary: {
        es: {
          singular: "{DATE} a las {TIME}"
        },
        "de-DE": {
          singular: "{DATE} am {TIME}"
        },
        "fr-FR": {
          singular: "Le {DATE} à {TIME}"
        },
        "ja-JP": {
          singular: "{DATE} {TIME}"
        },
        "ko-KR": {
          singular: "{DATE} {TIME}"
        },
        "pt-BR": {
          singular: "Em {DATE} às {TIME}"
        },
        "zh-CN": {
          singular: "{DATE} {TIME}"
        }
      }
    }),
    InvalidEmailAddress: (0, _v1.translate)({
      singular: "Enter a valid email address",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Ingrese una dirección de correo electrónico válida"
        },
        "de-DE": {
          singular: "Gib eine gültige E-Mail-Adresse ein."
        },
        "fr-FR": {
          singular: "Saisissez une adresse e-mail valide"
        },
        "ja-JP": {
          singular: "有効なメールアドレスを入力してください"
        },
        "ko-KR": {
          singular: "올바른 이메일 주소를 입력하세요."
        },
        "pt-BR": {
          singular: "Digite um endereço de e-mail válido"
        },
        "zh-CN": {
          singular: "输入有效的电子邮件地址"
        }
      }
    }),
    OptingInIsRequired: (0, _v1.translate)({
      singular: "Opt in to continue",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Aceptar para continuar"
        },
        "de-DE": {
          singular: "Bestätigen, um fortzufahren"
        },
        "fr-FR": {
          singular: "Accepter de continuer"
        },
        "ja-JP": {
          singular: "オプトインして続行する"
        },
        "ko-KR": {
          singular: "계속하려면 가입하세요."
        },
        "pt-BR": {
          singular: "Inscreva-se para continuar"
        },
        "zh-CN": {
          singular: "选择加入以继续"
        }
      }
    }),
    RegisterToSignIn: (0, _v1.translate)({
      singular: "Register first to sign in",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Regístrese primero para iniciar sesión"
        },
        "de-DE": {
          singular: "Registrieren Sie sich zuerst, um sich anzumelden"
        },
        "fr-FR": {
          singular: "Inscrivez-vous pour pouvoir vous connecter"
        },
        "ja-JP": {
          singular: "サインインするには、最初に登録してください"
        },
        "ko-KR": {
          singular: "먼저 회원으로 가입하고 로그인하세요."
        },
        "pt-BR": {
          singular: "Cadastre-se primeiro para fazer login"
        },
        "zh-CN": {
          singular: "先注册才能登录"
        }
      }
    }),
    RegistrationFullMessage: (0, _v1.translate)({
      singular: "Sorry, registration is full.",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Lo sentimos, la inscripción está completa."
        },
        "de-DE": {
          singular: "Leider sind alle Plätze für die Registrierung schon vergeben."
        },
        "fr-FR": {
          singular: "Désolé, les inscriptions sont complètes."
        },
        "ja-JP": {
          singular: "申し訳ありません、登録枠に空きがありません。"
        },
        "ko-KR": {
          singular: "죄송합니다, 등록자 정원이 모두 찼습니다."
        },
        "pt-BR": {
          singular: "Desculpe, as inscrições estão completas."
        },
        "zh-CN": {
          singular: "抱歉，注册人数已满。"
        }
      }
    }),
    SignIn: (0, _v1.translate)({
      singular: "Sign in",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Ingresar"
        },
        "de-DE": {
          singular: "Anmelden"
        },
        "fr-FR": {
          singular: "Se connecter"
        },
        "ja-JP": {
          singular: "サインイン"
        },
        "ko-KR": {
          singular: "로그인"
        },
        "pt-BR": {
          singular: "Entrar"
        },
        "zh-CN": {
          singular: "登录"
        }
      }
    }),
    SkipToVideo: (0, _v1.translate)({
      singular: "Skip to video",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Saltar al video"
        },
        "de-DE": {
          singular: "Direkt zum Video"
        },
        "fr-FR": {
          singular: "Passer à la vidéo"
        },
        "ja-JP": {
          singular: "動画にスキップ"
        },
        "ko-KR": {
          singular: "동영상으로 건너뛰기"
        },
        "pt-BR": {
          singular: "Ir para o vídeo"
        },
        "zh-CN": {
          singular: "跳到视频"
        }
      }
    }),
    StepXofY: (_v0, _v1) => (0, _v1.translate)({
      singular: "Step {STEP} of {STEPS}",
      replacements: {
        STEP: _v0,
        STEPS: _v1
      },
      locale: _v0,
      dictionary: {
        es: {
          singular: "Paso {STEP} de {STEPS}"
        },
        "de-DE": {
          singular: "Schritt {STEP} von {STEPS}"
        },
        "fr-FR": {
          singular: "Étape {STEP} de {STEPS}"
        },
        "ja-JP": {
          singular: "ステップ {STEP} / {STEPS}"
        },
        "ko-KR": {
          singular: "{STEP} / {STEPS} 페이지"
        },
        "pt-BR": {
          singular: "Passo {STEP} de {STEPS}"
        },
        "zh-CN": {
          singular: "步骤 {STEP} / {STEPS}"
        }
      }
    }),
    ThisFieldIsRequired: (0, _v1.translate)({
      singular: "This field is required.",
      locale: _v0,
      dictionary: {
        es: {
          singular: "Este campo es obligatorio."
        },
        "de-DE": {
          singular: "Dies ist ein Pflichtfeld."
        },
        "fr-FR": {
          singular: "Ce champ doit être rempli."
        },
        "ja-JP": {
          singular: "情報を入力してください。"
        },
        "ko-KR": {
          singular: "필수 항목입니다."
        },
        "pt-BR": {
          singular: "Este campo é obrigatório."
        },
        "zh-CN": {
          singular: "此字段为必填字段。"
        }
      }
    }),
    To: (0, _v1.translate)({
      singular: "to",
      locale: _v0,
      dictionary: {
        es: {
          singular: "a"
        },
        "de-DE": {
          singular: "An"
        },
        "fr-FR": {
          singular: "À"
        },
        "ja-JP": {
          singular: "送信先"
        },
        "ko-KR": {
          singular: "대상"
        },
        "pt-BR": {
          singular: "Para"
        },
        "zh-CN": {
          singular: "至"
        }
      }
    }),
    UhOhThereWasAProblem: (0, _v1.translate)({
      singular: "Uh oh. There was a problem. Please try again.",
      locale: _v0,
      dictionary: {
        es: {
          singular: "¡Oh! Hubo un problema. Inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Hoppla! Leider gab es ein Problem. Bitte versuche es nochmal."
        },
        "fr-FR": {
          singular: "Oh oh... Nous avons rencontré un problème. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "エラーが発生しました。再度お試しください。"
        },
        "ko-KR": {
          singular: "앗, 오류가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Ah, não! Houve um problema. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "唉哟。出现问题了。请重试。"
        }
      }
    }),
    VideoWillPlayIn: _v0 => (0, _v1.translate)({
      singular: "Video will play in {TIMER}",
      replacements: {
        TIMER: _v0
      },
      locale: _v0,
      dictionary: {
        es: {
          singular: "El video se reproducirá en {TIMER}"
        },
        "de-DE": {
          singular: "Das Video wird in {TIMER} abgespielt"
        },
        "fr-FR": {
          singular: "La lecture de la vidéo commencera dans {TIMER}"
        },
        "ja-JP": {
          singular: "動画は{TIMER}以内に再生されます"
        },
        "ko-KR": {
          singular: "동영상이 {TIMER} 후에 재생됩니다."
        },
        "pt-BR": {
          singular: "O vídeo será reproduzido em {TIMER}"
        },
        "zh-CN": {
          singular: "视频将在 {TIMER} 后播放"
        }
      }
    })
  }), "isLocalizationLocale", 0, _v0 => _v5.some(({
    code: _v0
  }) => _v0.valueOf() === _v0), "removeButtonLocales", 0, _v28, "removeFieldLocales", 0, _v30, "removeHtmlLocales", 0, _v27, "resolveLocalizedButtonText", 0, ({
    authored: _v0
  }, _v1, _v2, _v3, _v4 = _v4) => {
    if (_v2 === _v4) return _v3;
    let _v5 = _v0?.[_v1]?.[_v2];
    return null != _v5 && "" !== _v5 ? _v5 : _v3;
  }, "resolveLocalizedField", 0, (_v0, _v1, _v2 = _v4) => {
    if (_v1 === _v2 || null == _v0.localizations) return _v0;
    let _v3 = _v0.metadata?.options?.map(_v0 => {
      let _v1 = _v0.localizations?.options?.find(({
        optionCid: _v0
      }) => _v0 === _v0.optionCid);
      return {
        ..._v0,
        optionValue: _v0.optionValue ?? _v0.optionLabel,
        optionLabel: _v1?.[_v1] ?? _v0.optionLabel
      };
    });
    return {
      ..._v0,
      name: _v0.localizations.name?.[_v1] ?? _v0.name,
      metadata: _v0.metadata ? {
        ..._v0.metadata,
        description: _v0.localizations.description?.[_v1] ?? _v0.metadata.description,
        options: _v3
      } : void 0
    };
  }, "resolveLocalizedPageCopy", 0, ({
    authored: _v0
  }, _v1, _v2, _v3, _v4 = _v4) => {
    if (_v2 === _v4) return _v3;
    let _v5 = _v0?.[_v1]?.[_v2]?.tagsResolved;
    return null != _v5 && "" !== _v5 ? _v5 : _v20(_v0?.[_v1]?.[_v4]?.tagsResolved, _v2) ?? _v3;
  }, "resolveSelectedLocale", 0, (_v0, _v1, _v2 = _v4) => _v1.some(_v0 => _v0 === _v0) ? _v0 : _v2, "setLocalizedButtonText", 0, _v25, "setLocalizedFieldName", 0, (_v0, _v1, _v2) => {
    let _v3 = "checkbox" === _v0.type ? "description" : "name";
    return {
      ..._v0,
      localizations: {
        ..._v0.localizations,
        [_v3]: {
          ..._v0.localizations?.[_v3],
          [_v1]: _v2
        }
      }
    };
  }, "setLocalizedOptions", 0, _v29, "setLocalizedPageCopy", 0, _v24, "summarizeTranslation", 0, (_v0, _v1) => {
    let _v2 = _v33(_v0.syncStatus) ? _v0.syncStatus : {},
      _v3 = _v33(_v0.failures) ? _v0.failures : {};
    return Object.fromEntries(_v1.map(_v0 => {
      let _v1 = Array.isArray(_v3[_v0]) ? _v3[_v0] : [],
        _v2 = 0 === _v1.length && (_v2[_v0] || null == _v2[_v0]);
      return [_v0, {
        succeeded: _v2,
        failures: _v1
      }];
    }));
  }, "swapLeadCaptureLocale", 0, (_v0, _v1, _v2 = [..._v0.enabledLocales.filter(_v0 => _v0 !== _v1), _v0.defaultLocale]) => {
    let _v3 = _v0.defaultLocale,
      _v4 = Object.fromEntries(_v15.map(([_v0]) => {
        let _v1 = _v0.htmlLocalizations?.[_v0] ?? {},
          _v2 = _v0[_v0],
          {
            [_v1]: _v3,
            ..._v4
          } = {
            ..._v1,
            [_v3]: _v2
          };
        return [_v0, _v4];
      })),
      _v5 = Object.fromEntries(_v15.map(([_v0]) => {
        let _v1, _v2, _v3;
        return [_v0, _v0.htmlLocalizations?.[_v0]?.[_v1] ?? (_v2 = (_v1 = _v0[_v0]).tagsUnresolved ?? _v1.tagsResolved, _v3 = _v0.htmlLocalizations?.[_v0]?.[_v4] ?? (_v3 === _v4 ? _v1 : void 0), {
          tagsResolved: _v20(_v3?.tagsResolved, _v1) ?? _v1.tagsResolved,
          tagsUnresolved: _v20(_v3?.tagsUnresolved ?? _v3?.tagsResolved, _v1) ?? _v2
        })];
      })),
      _v6 = Object.fromEntries(Object.entries(_v0.buttonLocalizations ?? {}).map(([_v0, _v1]) => {
        let _v2 = _v0 === _v3.BUTTON_TEXT_TYPE.BACK ? _v0.secondaryButtonStyle : _v0.primaryButtonStyle,
          {
            [_v1]: _v3,
            ..._v4
          } = {
            ..._v1,
            [_v3]: _v2[_v0]
          };
        return [_v0, _v4];
      })),
      _v7 = {
        ..._v0.primaryButtonStyle
      },
      _v8 = {
        ..._v0.secondaryButtonStyle
      };
    Object.entries(_v0.buttonLocalizations ?? {}).forEach(([_v0, _v1]) => {
      let _v2 = _v0 === _v3.BUTTON_TEXT_TYPE.BACK ? _v8 : _v7,
        _v3 = _v1?.[_v1] ?? _v21(_v2[_v0], _v1);
      "" !== _v3 && (_v0 === _v3.BUTTON_TEXT_TYPE.BACK ? _v8[_v0] = _v3 : _v7[_v0] = _v3);
    });
    let _v9 = Object.fromEntries(_v2.map(_v0 => [_v0, _v0 === _v3 || (_v0.localizationSyncStatus?.[_v0] ?? !1)])),
      _v10 = _v5.map(({
        code: _v0
      }) => _v0).filter(_v0 => !_v2.includes(_v0));
    return {
      ..._v0,
      ..._v5,
      defaultLocale: _v1,
      enabledLocales: _v2,
      htmlLocalizations: _v27(_v4, _v10),
      buttonLocalizations: _v28(_v6, _v10),
      primaryButtonStyle: _v7,
      secondaryButtonStyle: _v8,
      customFields: _v0.customFields.map(_v0 => _v30(_v32(_v0, _v3, _v1), _v10)),
      hiddenFields: _v0.hiddenFields.map(_v0 => _v30(_v32(_v0, _v3, _v1), _v10)),
      localizationSyncStatus: _v9
    };
  }, "syncOptionLocalizations", 0, (_v0, _v1) => {
    let _v2 = _v0.localizations?.options?.map(_v0 => {
      let _v1 = _v1.find(({
        optionCid: _v0
      }) => _v0 === _v0.optionCid);
      return _v1 ? {
        ..._v0,
        optionPosition: _v1.optionPosition
      } : null;
    }).filter(_v0 => null !== _v0);
    return {
      ..._v0,
      metadata: {
        ..._v0.metadata,
        options: _v1
      },
      localizations: _v0.localizations ? {
        ..._v0.localizations,
        options: _v2
      } : _v0.localizations
    };
  }, "translateFieldName", 0, _v23, "translateStockButtonLabel", 0, _v21]);
}