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
  let _v23 = _v0 => {
      let [_v1, _v2] = (0, _v4.useState)(!0),
        _v3 = (0, _v4.useCallback)(() => {
          _v2(_v0 => !_v0);
        }, []);
      return (0, _v1.jsxs)(_v10.InputGroup, {
        children: [(0, _v1.jsx)(_v18.Input, {
          ..._v0,
          type: "text",
          sx: {
            WebkitTextSecurity: _v1 ? "disc" : "none"
          }
        }), (0, _v1.jsx)(_v11.InputRightElement, {
          width: (0, _v20.rem)(40),
          children: (0, _v1.jsx)(_v19.IconButton, {
            "aria-label": _v1 ? "Show" : "Hide",
            size: "md",
            variant: "tertiary",
            icon: _v1 ? (0, _v1.jsx)(_v21.Eye, {}) : (0, _v1.jsx)(_v22.EyeShut, {}),
            onClick: _v3
          })
        })]
      });
    },
    _v24 = async _v0 => {
      if (!navigator.clipboard) return !1;
      try {
        return await navigator.clipboard.writeText(_v0), !0;
      } catch (_v0) {
        return !1;
      }
    };
  _v0.s(["PasswordInput", 0, ({
    initialValue: _v0 = "",
    prefillValue: _v1 = "",
    maxLength: _v2 = 32,
    name: _v3 = "password-input",
    isLoading: _v4 = !1,
    isDisabled: _v5 = !1,
    isInvalid: _v6 = !1,
    isLabelHidden: _v7 = !0,
    hideRightElement: _v8 = !1,
    onChange: _v9,
    onFocusChange: _v10,
    onUnmount: _v11,
    onSave: _v12,
    ..._v13
  }) => {
    let _v14 = (0, _v15.useToast)(),
      _v15 = (0, _v4.useRef)(_v14),
      [_v16, _v17] = (0, _v4.useState)(_v0 ?? _v1 ?? ""),
      [_v18, _v19] = (0, _v4.useState)(!1),
      [_v20, _v21] = (0, _v4.useState)(!1),
      _v22 = _v6 || _v18,
      _v23 = (0, _v4.useRef)(null),
      _v24 = (0, _v4.useRef)({
        isChanged: !1,
        inputPassword: ""
      });
    (0, _v4.useEffect)(() => {
      _v24.current = {
        isChanged: _v16 !== _v0,
        inputPassword: _v16
      };
    }, [_v16, _v0]);
    let _v25 = (0, _v4.useCallback)(_v0 => {
        _v9?.(_v0), _v17(_v0.target.value), "" !== _v0.target.value && _v19(!1);
      }, [_v9]),
      _v26 = (0, _v4.useCallback)(() => {
        _v21(!0), _v10?.(!0, _v24.current);
      }, [_v10]),
      _v27 = (0, _v4.useCallback)(_v0 => {
        _v21(!1), _v10 && _v23.current && !_v23.current.contains(_v0.relatedTarget) && setTimeout(() => {
          _v10(!1, _v24.current);
        }, 200);
      }, [_v10]),
      _v28 = (0, _v16.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      }),
      _v29 = (0, _v4.useRef)(null),
      {
        width: _v30
      } = (0, _v14.useSize)(_v29) ?? {
        width: 78
      },
      _v31 = (0, _v4.useCallback)(async _v0 => {
        let _v1, _v2;
        _v0.preventDefault(), _v0.stopPropagation();
        let _v3 = _v0.currentTarget.querySelector("input").value;
        (_v1 = _v3, _v2 = _v2, _v1 && _v1.trim().length > 0 && _v1.trim().length <= _v2) ? (await _v12?.(_v3), _v10?.(!1, _v24.current)) : _v19(!0);
      }, [_v2, _v12, _v10]),
      _v32 = _v16 === _v0 && _v16?.trim().length > 0,
      _v33 = (0, _v16.translate)({
        singular: "Copy",
        dictionary: {
          es: {
            singular: "Copiar"
          },
          "de-DE": {
            singular: "Kopieren"
          },
          "fr-FR": {
            singular: "Copier"
          },
          "ja-JP": {
            singular: "コピー"
          },
          "ko-KR": {
            singular: "복사"
          },
          "pt-BR": {
            singular: "Copiar"
          },
          "zh-CN": {
            singular: "复制"
          }
        }
      }),
      _v34 = (0, _v4.useCallback)(async () => {
        let _v0 = await _v24(_v16);
        _v0 || (_v0 = (0, _v17.default)(_v16));
        let _v1 = _v0 ? (0, _v16.translate)({
            singular: "Password copied",
            dictionary: {
              es: {
                singular: "Contraseña copiada"
              },
              "de-DE": {
                singular: "Passwort kopiert"
              },
              "fr-FR": {
                singular: "Mot de passe copié"
              },
              "ja-JP": {
                singular: "パスワードがコピーされました"
              },
              "ko-KR": {
                singular: "비밀번호 복사 완료"
              },
              "pt-BR": {
                singular: "Senha copiada"
              },
              "zh-CN": {
                singular: "密码已复制"
              }
            }
          }) : (0, _v16.translate)({
            singular: "Couldn't copy password. Try again.",
            dictionary: {
              es: {
                singular: "Error al copiar la contraseña. Inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Das Passwort konnte nicht kopiert werden. Nochmal versuchen."
              },
              "fr-FR": {
                singular: "Impossible de copier le mot de passe. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "パスワードをコピーできませんでした。もう一度お試しください。"
              },
              "ko-KR": {
                singular: "비밀번호를 복사할 수 없습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Não foi possível copiar a senha. Tente novamente."
              },
              "zh-CN": {
                singular: "无法复制密码。请重试。"
              }
            }
          }),
          _v2 = "password-copy";
        _v15.current.isActive(_v2) || _v15.current({
          title: _v1,
          id: _v2,
          ...(!_v0 && {
            variant: "warning"
          })
        });
      }, [_v16]),
      _v35 = (0, _v4.useRef)(_v11);
    (0, _v4.useEffect)(() => () => void _v35.current?.(_v24.current), []);
    let _v36 = "u" > typeof navigator && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) ? _v23 : _v12.Password;
    return (0, _v1.jsxs)(_v7.FormControl, {
      isInvalid: _v22,
      children: [(0, _v1.jsx)(_v9.FormLabel, {
        hidden: _v7,
        children: (0, _v1.jsx)(_v13.Text, {
          variant: "heading-xs",
          children: (0, _v16.translate)({
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
        })
      }), (0, _v1.jsxs)(_v6.Flex, {
        as: "form",
        flexDirection: "column",
        gap: "2",
        id: "password-form",
        ref: _v23,
        onSubmit: _v31,
        onBlur: _v27,
        children: [(0, _v1.jsxs)(_v10.InputGroup, {
          children: [(0, _v1.jsx)(_v36, {
            name: _v3,
            "data-testid": "password-input",
            "data-1p-ignore": !0,
            "data-bwignore": !0,
            "data-lpignore": "true",
            "data-protonpass-ignore": "true",
            autoFocus: !_v0,
            autoComplete: "new-password",
            placeholder: (0, _v16.translate)({
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
            }),
            value: _v16,
            maxLength: _v2,
            isDisabled: _v5 || _v4,
            isInvalid: _v22,
            pr: _v30 + 88 - 32,
            onChange: _v25,
            onFocus: _v26,
            ..._v13
          }), !_v8 && (0, _v1.jsx)(_v11.InputRightElement, {
            width: _v30 + 88,
            pointerEvents: "none",
            hidden: _v5,
            children: (0, _v1.jsx)(_v5.Button, {
              size: "xs",
              ref: _v29,
              pointerEvents: "auto",
              ...(_v32 ? {
                variant: "secondary",
                isLoading: !1,
                onClick: _v34
              } : {
                variant: "primary",
                isLoading: _v4,
                type: "submit"
              }),
              children: _v32 ? _v33 : _v28
            })
          })]
        }), (0, _v1.jsx)(_v2.AnimatePresence, {
          children: (_v20 || _v18) && (0, _v1.jsxs)(_v6.Flex, {
            as: _v3.motion.div,
            initial: {
              height: 0,
              opacity: 0
            },
            animate: {
              height: "auto",
              opacity: 1
            },
            exit: {
              height: 0,
              opacity: 0
            },
            transition: {
              duration: "2",
              type: "spring",
              stiffness: "600",
              damping: "32"
            },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            children: [_v18 && (0, _v1.jsx)(_v8.FormErrorMessage, {
              variant: "error",
              fontSize: "body-sm",
              lineHeight: "body-sm",
              mt: "0",
              children: (0, _v16.translate)({
                singular: "Required",
                dictionary: {
                  es: {
                    singular: "Requerido"
                  },
                  "de-DE": {
                    singular: "Erforderlich"
                  },
                  "fr-FR": {
                    singular: "Obligatoire"
                  },
                  "ja-JP": {
                    singular: "必須"
                  },
                  "ko-KR": {
                    singular: "필수"
                  },
                  "pt-BR": {
                    singular: "Obrigatório"
                  },
                  "zh-CN": {
                    singular: "必填"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v7.FormHelperText, {
              flex: "1",
              textAlign: "right",
              mt: "0",
              children: [_v16.length, " / ", _v2]
            })]
          })
        })]
      })]
    });
  }], 0);
}