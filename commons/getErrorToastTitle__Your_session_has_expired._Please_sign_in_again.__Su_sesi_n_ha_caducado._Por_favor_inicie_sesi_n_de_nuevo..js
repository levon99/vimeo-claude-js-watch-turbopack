{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getErrorToastTitle", 0, function (_v0, _v1, _v2) {
    if (!(_v0 instanceof _v1.NetworkError)) return _v1;
    let _v3 = _v2?.[_v0.status];
    if (_v3) return _v3;
    switch (_v0.status) {
      case 401:
        return (0, _v2.translate)({
          singular: "Your session has expired. Please sign in again.",
          dictionary: {
            es: {
              singular: "Su sesión ha caducado. Por favor, inicie sesión de nuevo."
            },
            "de-DE": {
              singular: "Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an."
            },
            "fr-FR": {
              singular: "Votre session a expiré. Veuillez vous reconnecter."
            },
            "ja-JP": {
              singular: "セッションの有効期限が切れました。再度サインインしてください。"
            },
            "ko-KR": {
              singular: "세션이 만료되었습니다. 다시 로그인해 주세요."
            },
            "pt-BR": {
              singular: "Sua sessão expirou. Por favor, faça login novamente."
            },
            "zh-CN": {
              singular: "会话已过期。请重新登录。"
            }
          }
        });
      case 403:
        return (0, _v2.translate)({
          singular: "You don't have permission to make this change.",
          dictionary: {
            es: {
              singular: "No tiene permiso para realizar este cambio."
            },
            "de-DE": {
              singular: "Sie haben keine Berechtigung, diese Änderung vorzunehmen."
            },
            "fr-FR": {
              singular: "Vous n'avez pas l'autorisation d'effectuer cette modification."
            },
            "ja-JP": {
              singular: "この変更を行う権限がありません。"
            },
            "ko-KR": {
              singular: "이 변경을 수행할 권한이 없습니다."
            },
            "pt-BR": {
              singular: "Você não tem permissão para fazer essa alteração."
            },
            "zh-CN": {
              singular: "您没有权限进行此更改。"
            }
          }
        });
      case 413:
        return (0, _v2.translate)({
          singular: "That file is too large. Please choose a smaller one.",
          dictionary: {
            es: {
              singular: "Ese archivo es demasiado grande. Por favor, elija uno más pequeño."
            },
            "de-DE": {
              singular: "Die Datei ist zu groß. Bitte wählen Sie eine kleinere Datei."
            },
            "fr-FR": {
              singular: "Ce fichier est trop volumineux. Veuillez en choisir un plus petit."
            },
            "ja-JP": {
              singular: "そのファイルは大きすぎます。より小さいファイルを選択してください。"
            },
            "ko-KR": {
              singular: "해당 파일이 너무 큽니다. 더 작은 파일을 선택해 주세요."
            },
            "pt-BR": {
              singular: "Esse arquivo é muito grande. Por favor, escolha um menor."
            },
            "zh-CN": {
              singular: "该文件过大。请选择更小的文件。"
            }
          }
        });
      case 415:
        return (0, _v2.translate)({
          singular: "That file type isn't supported.",
          dictionary: {
            es: {
              singular: "Ese tipo de archivo no es compatible."
            },
            "de-DE": {
              singular: "Dieser Dateityp wird nicht unterstützt."
            },
            "fr-FR": {
              singular: "Ce type de fichier n'est pas pris en charge."
            },
            "ja-JP": {
              singular: "そのファイル形式はサポートされていません。"
            },
            "ko-KR": {
              singular: "해당 파일 형식은 지원되지 않습니다."
            },
            "pt-BR": {
              singular: "Esse tipo de arquivo não é suportado."
            },
            "zh-CN": {
              singular: "不支持该文件类型。"
            }
          }
        });
      case 429:
        return (0, _v2.translate)({
          singular: "Too many requests. Please wait a moment and try again.",
          dictionary: {
            es: {
              singular: "Demasiadas solicitudes. Espere un momento e intente de nuevo."
            },
            "de-DE": {
              singular: "Zu viele Anfragen. Bitte warten Sie einen Moment und versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Trop de requêtes. Veuillez patienter un instant et réessayer."
            },
            "ja-JP": {
              singular: "リクエストが多すぎます。しばらく待ってから再度お試しください。"
            },
            "ko-KR": {
              singular: "요청이 너무 많습니다. 잠시 기다린 후 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Muitas solicitações. Por favor, aguarde um momento e tente novamente."
            },
            "zh-CN": {
              singular: "请求过多。请稍候再试。"
            }
          }
        });
      default:
        return _v1;
    }
  }]);
}