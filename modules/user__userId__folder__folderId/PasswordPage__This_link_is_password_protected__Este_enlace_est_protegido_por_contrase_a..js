{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["PasswordPage", 0, function ({
    reviewId: _v0
  }) {
    let _v1 = (0, _v2.useCallback)(({
      password: _v0,
      token: _v1
    }) => (0, _v6.postPassword)(_v0, {
      token: _v1,
      password: _v0
    }), [_v0]);
    return (0, _v1.jsx)(_v4.PasswordPageView, {
      heading: (0, _v3.translate)({
        singular: "This link is password protected",
        dictionary: {
          es: {
            singular: "Este enlace está protegido por contraseña."
          },
          "de-DE": {
            singular: "Dieser Link ist kennwortgeschützt"
          },
          "fr-FR": {
            singular: "Ce lien est protégé par un mot de passe"
          },
          "ja-JP": {
            singular: "このリンクはパスワードで保護されています"
          },
          "ko-KR": {
            singular: "이 링크는 비밀번호로 보호되어 있습니다."
          },
          "pt-BR": {
            singular: "Este link está protegido por senha"
          },
          "zh-CN": {
            singular: "此链接受密码保护"
          }
        }
      }),
      submit: _v1,
      getErrorType: _v5.reviewPasswordErrorMapper
    });
  }]);
}