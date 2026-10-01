{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getTeamRoleLabel", 0, function (_v0) {
    switch (_v0) {
      case "Owner":
        return (0, _v1.translate)({
          singular: "Owner",
          dictionary: {
            es: {
              singular: "Propietario(a)"
            },
            "de-DE": {
              singular: "Inhaber"
            },
            "fr-FR": {
              singular: "Propriétaire"
            },
            "ja-JP": {
              singular: "所有者"
            },
            "ko-KR": {
              singular: "계정 소유자"
            },
            "pt-BR": {
              singular: "Proprietário"
            },
            "zh-CN": {
              singular: "所有者"
            }
          }
        });
      case "Admin":
        return (0, _v1.translate)({
          singular: "Admin",
          dictionary: {
            es: {
              singular: "Administrador(a)"
            },
            "fr-FR": {
              singular: "Administrateur"
            },
            "ja-JP": {
              singular: "管理者"
            },
            "ko-KR": {
              singular: "관리자"
            },
            "pt-BR": {
              singular: "Administrador"
            },
            "zh-CN": {
              singular: "管理员"
            }
          }
        });
      case "Contributor":
        return (0, _v1.translate)({
          singular: "Contributor",
          dictionary: {
            es: {
              singular: "Colaborador(a)"
            },
            "de-DE": {
              singular: "Beitragender"
            },
            "fr-FR": {
              singular: "Contributeur"
            },
            "ja-JP": {
              singular: "投稿者"
            },
            "ko-KR": {
              singular: "기여자"
            },
            "pt-BR": {
              singular: "Colaborador"
            },
            "zh-CN": {
              singular: "贡献者"
            }
          }
        });
      case "Contributor Plus":
        return (0, _v1.translate)({
          singular: "Contributor Plus",
          dictionary: {
            es: {
              singular: "Colaborador Plus"
            },
            "de-DE": {
              singular: "Beitragender Plus"
            },
            "fr-FR": {
              singular: "Contributeur Plus"
            },
            "ja-JP": {
              singular: "投稿者プラス"
            },
            "ko-KR": {
              singular: "기여자 플러스"
            },
            "pt-BR": {
              singular: "Colaborador Plus"
            }
          }
        });
      case "Uploader":
        return (0, _v1.translate)({
          singular: "Uploader",
          dictionary: {
            es: {
              singular: "Herramienta para subir videos"
            },
            "ja-JP": {
              singular: "アップローダー"
            },
            "ko-KR": {
              singular: "업로더"
            },
            "pt-BR": {
              singular: "Quem carrega os vídeos"
            },
            "zh-CN": {
              singular: "上传者"
            }
          }
        });
      case "Viewer":
        return (0, _v1.translate)({
          singular: "Viewer",
          dictionary: {
            es: {
              singular: "Espectador(a)"
            },
            "de-DE": {
              singular: "Zuschauende"
            },
            "fr-FR": {
              singular: "Spectateur"
            },
            "ja-JP": {
              singular: "閲覧者"
            },
            "ko-KR": {
              singular: "뷰어"
            },
            "pt-BR": {
              singular: "Espectador"
            },
            "zh-CN": {
              singular: "观众"
            }
          }
        });
      default:
        return _v0;
    }
  }]);
}