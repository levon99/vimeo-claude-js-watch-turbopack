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
    _v11 = _v0.i(0);
  let _v12 = 1,
    _v13 = 32;
  _v0.s(["PasswordForm", 0, ({
    isInvalid: _v0,
    minLength: _v1 = _v12,
    maxLength: _v2 = _v13,
    children: _v3,
    error: _v4,
    onSubmit: _v5
  }) => {
    let [_v6, _v7] = (0, _v2.useState)(""),
      [_v8, _v9] = (0, _v2.useState)(!1);
    (0, _v2.useEffect)(() => {
      _v9(_v0);
    }, [_v0]);
    let _v10 = () => {
      _v5?.(_v6);
    };
    return (0, _v1.jsx)(_v4.Center, {
      m: "100",
      children: (0, _v1.jsxs)(_v10.VStack, {
        gap: {
          base: "50",
          md: "100"
        },
        children: [_v3, (0, _v1.jsxs)(_v5.Flex, {
          gap: "100",
          direction: "column",
          w: "100%",
          maxW: (0, _v9.rem)(448),
          children: [(0, _v1.jsxs)(_v6.FormControl, {
            display: "flex",
            flexDirection: "column",
            isInvalid: _v8,
            children: [(0, _v1.jsx)(_v8.Password, {
              minLength: _v1,
              maxLength: _v2,
              placeholder: (0, _v11.translate)({
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
              "aria-required": "true",
              autoComplete: "none",
              "data-lpignore": "true",
              onChange: _v0 => {
                _v7(_v0.target.value), _v8 && _v9(!1);
              },
              onKeyDown: _v0 => {
                "Enter" === _v0.key && _v10();
              },
              w: "100%",
              size: {
                base: "sm",
                md: "md"
              }
            }), (0, _v1.jsx)(_v7.FormErrorMessage, {
              children: _v4?.message
            })]
          }), (0, _v1.jsx)(_v3.Button, {
            type: "submit",
            size: {
              base: "sm",
              md: "md"
            },
            onClick: _v10,
            isDisabled: _v8 || !_v6,
            children: (0, _v11.translate)({
              singular: "Submit",
              dictionary: {
                es: {
                  singular: "Enviar"
                },
                "de-DE": {
                  singular: "Senden"
                },
                "fr-FR": {
                  singular: "Envoyer"
                },
                "ja-JP": {
                  singular: "送信"
                },
                "ko-KR": {
                  singular: "제출"
                },
                "pt-BR": {
                  singular: "Enviar"
                },
                "zh-CN": {
                  singular: "提交"
                }
              }
            })
          })]
        })]
      })
    });
  }]);
}