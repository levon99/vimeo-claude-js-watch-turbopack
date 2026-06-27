{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v2.default.div.withConfig({
      displayName: "SearchItemStatus__Wrapper",
      componentId: "sc-165033b7-0"
    })`
  display: flex;
`,
    _v8 = _v2.default.div.withConfig({
      displayName: "SearchItemStatus__StatusWrapper",
      componentId: "sc-165033b7-1"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
  _v0.s(["SearchItemStatus", 0, ({
    role: _v0,
    roleDisplayName: _v1
  }) => {
    let _v2 = _v0 === _v5.PermissionLevel.Uploader ? (0, _v4.translate)({
      singular: "You cannot share with a user with the Uploader role.",
      dictionary: {
        es: {
          singular: "No puede compartir con un usuario que tiene la función de subir videos."
        },
        "de-DE": {
          singular: "Die Freigabe kann nicht mit einem Benutzer mit der Uploader-Rolle erfolgen."
        },
        "fr-FR": {
          singular: "Vous ne pouvez pas partager avec un utilisateur ayant le rôle d'uploader."
        },
        "ja-JP": {
          singular: "アップローダーの役割を持つユーザーと共有することはできません。"
        },
        "ko-KR": {
          singular: "업로더 역할을 가진 사용자와는 공유할 수 없습니다."
        },
        "pt-BR": {
          singular: "Você não pode compartilhar com um usuário que tem a função de carregar vídeos."
        },
        "zh-CN": {
          singular: "不能与具有上传者角色的用户共享。"
        }
      }
    }) : null;
    return (0, _v1.jsxs)(_v7, {
      children: [(0, _v1.jsx)(_v8, {
        children: (0, _v1.jsx)(_v3.Paragraph, {
          size: "sm",
          fontWeight: "medium",
          color: "text-secondary",
          children: _v1
        })
      }), _v2 && (0, _v1.jsx)(_v6.Annotation, {
        label: _v2
      })]
    });
  }]);
}