{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["EventPassword", 0, function ({
    password: _v0,
    onChange: _v1,
    isDisabled: _v2 = !1
  }) {
    return (0, _v1.jsx)(_v2.Password, {
      size: "sm",
      "data-testid": "event-password",
      placeholder: (0, _v3.translate)({
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
      isDisabled: _v2,
      backgroundColor: "surface",
      defaultValue: _v0,
      value: _v0,
      onChange: _v0 => {
        _v0.target.value !== _v0 && _v1(_v0.target.value);
      }
    });
  }]);
}