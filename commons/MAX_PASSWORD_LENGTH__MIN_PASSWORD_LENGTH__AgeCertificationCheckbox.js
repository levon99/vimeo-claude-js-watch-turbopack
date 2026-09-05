{
  "use strict";

  _v0.s(["MAX_PASSWORD_LENGTH", 0, 72, "MIN_PASSWORD_LENGTH", 0, 8], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["AgeCertificationCheckbox", 0, ({
    overEighteenCertification: _v0,
    setOverEighteenCertification: _v1,
    setError: _v2,
    isFullScreen: _v3,
    shouldShowAgeCertification: _v4,
    isInvalid: _v5,
    setAgeCertificationInvalid: _v6
  }) => _v4 ? (0, _v1.jsx)(_v2.Checkbox, {
    size: "md",
    isChecked: _v0,
    onChange: _v0 => {
      _v1(_v0.target.checked), _v2(null), _v6(!1);
    },
    id: "self_certification_checkbox",
    style: _v3 ? {} : {
      marginTop: "-25px",
      marginBottom: "10px"
    },
    isInvalid: _v5,
    children: (0, _v1.jsx)(_v4.Tooltip, {
      label: (0, _v6.translate)({
        singular: "You must be 18 or older to sign up or use our services in your area.",
        dictionary: {
          es: {
            singular: "Debe tener 18 años o más para registrarse o utilizar nuestros servicios en su área."
          },
          "de-DE": {
            singular: "Sie müssen mindestens 18 Jahre alt sein, um sich anzumelden oder unsere Dienste in Ihrer Region zu nutzen."
          },
          "fr-FR": {
            singular: "Vous devez avoir 18 ans ou plus pour vous inscrire ou utiliser nos services dans votre région."
          },
          "ja-JP": {
            singular: "お住まいの地域では、当サービスのサインアップや利用には、18歳以上である必要があります。"
          },
          "ko-KR": {
            singular: "해당 지역에서 서비스를 이용하거나 가입하려면 18세 이상이어야 합니다."
          },
          "pt-BR": {
            singular: "Você deve ter 18 anos ou mais para se inscrever ou usar nossos serviços na sua região."
          },
          "zh-CN": {
            singular: "您必须年满 18 岁才能在您所在的地区注册或使用我们的服务。"
          }
        }
      }),
      placement: "top",
      maxWidth: (0, _v5.rem)(265),
      children: (0, _v1.jsx)(_v3.Text, {
        variant: _v3 ? "body-sm" : "body-md",
        display: "inline",
        color: _v3 ? "text-secondary" : "gray.600",
        children: (0, _v6.translate)({
          singular: "By checking this box, I certify that I'm 18 or older.",
          dictionary: {
            es: {
              singular: "Al marcar esta casilla, confirmo que tengo 18 años o más."
            },
            "de-DE": {
              singular: "Mit dem Ankreuzen dieses Kästchen bestätige ich, dass ich 18 Jahre oder älter bin."
            },
            "fr-FR": {
              singular: "En cochant cette case, je certifie avoir 18 ans ou plus."
            },
            "ja-JP": {
              singular: "このボックスにチェックを入れることで、私は18歳以上であることを確認します。"
            },
            "ko-KR": {
              singular: "이 확인란을 선택함으로써 본인이 만 18세 이상임을 확인합니다."
            },
            "pt-BR": {
              singular: "Ao marcar esta caixa, confirmo que tenho 18 anos ou mais."
            },
            "zh-CN": {
              singular: "通过勾选此框，我确认我已年满 18 岁。"
            }
          }
        })
      })
    })
  }) : null], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["PasswordStrengthIndicator", 0, function ({
    passwordScore: _v0
  }) {
    return (0, _v7.useMemo)(() => {
      if (void 0 === _v0) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v0 = 25,
        _v1 = "linear-gradient(90deg, #9D2926 0%, #E9394C 61.06%, #E0295B 85.1%, #E4259E 100%)";
      return _v0 >= 4 ? (_v0 = 95, _v1 = "linear-gradient(90deg, #176127 0%, #127A28 22.12%, #28BF47 44.71%, #13F060 97.12%, #00DDDC 100%)") : _v0 >= 2 && (_v0 = 50, _v1 = "linear-gradient(90deg, #B06820 16.35%, #D7970B 34.13%, #FED94C 59.13%, #FFC964 86.06%, #FFFF00 100%)"), (0, _v1.jsx)(_v8.Progress, {
        height: (0, _v5.rem)(4),
        value: _v0,
        sx: {
          div: {
            background: _v1
          }
        }
      });
    }, [_v0]);
  }], 0);
}