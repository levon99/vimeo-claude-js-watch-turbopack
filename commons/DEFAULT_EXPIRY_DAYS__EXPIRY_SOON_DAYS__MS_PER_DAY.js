{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    let _v1 = new Date(_v0);
    _v1.setHours(0, 0, 0, 0);
    let _v2 = new Date();
    return _v2.setHours(0, 0, 0, 0), Math.max(0, Math.round((_v1.getTime() - _v2.getTime()) / 0));
  }
  function _v3(_v0, _v1) {
    return _v0.endsWith(".") ? `${_v0} ${_v1.charAt(0).toUpperCase()}${_v1.slice(1)}.` : `${_v0}, ${_v1}`;
  }
  _v0.s(["DEFAULT_EXPIRY_DAYS", 0, 7, "EXPIRY_SOON_DAYS", 0, 3, "MS_PER_DAY", 0, 0, "appendDuration", 0, _v3, "formatExpiryDuration", 0, function (_v0) {
    if (!_v0) return "";
    if (new Date(_v0).getTime() < Date.now()) return (0, _v1.translate)({
      singular: "link has expired",
      dictionary: {
        es: {
          singular: "el enlace ha expirado"
        },
        "de-DE": {
          singular: "Link ist abgelaufen"
        },
        "fr-FR": {
          singular: "le lien a expiré"
        },
        "ja-JP": {
          singular: "リンクの有効期限が切れました"
        },
        "ko-KR": {
          singular: "링크가 만료되었습니다"
        },
        "pt-BR": {
          singular: "o link expirou"
        },
        "zh-CN": {
          singular: "链接已过期"
        }
      }
    });
    let _v1 = _v2(_v0);
    return 0 === _v1 ? (0, _v1.translate)({
      singular: "expires today",
      dictionary: {
        es: {
          singular: "expira hoy"
        },
        "de-DE": {
          singular: "läuft heute ab"
        },
        "fr-FR": {
          singular: "expire aujourd'hui"
        },
        "ja-JP": {
          singular: "本日で期限切れです"
        },
        "ko-KR": {
          singular: "오늘 만료됩니다"
        },
        "pt-BR": {
          singular: "expira hoje"
        },
        "zh-CN": {
          singular: "今天到期"
        }
      }
    }) : 1 === _v1 ? (0, _v1.translate)({
      singular: "expires tomorrow",
      dictionary: {
        es: {
          singular: "expira mañana"
        },
        "de-DE": {
          singular: "läuft morgen ab"
        },
        "fr-FR": {
          singular: "expire demain"
        },
        "ja-JP": {
          singular: "明日で期限切れです"
        },
        "ko-KR": {
          singular: "내일 만료됩니다"
        },
        "pt-BR": {
          singular: "expira amanhã"
        },
        "zh-CN": {
          singular: "明天到期"
        }
      }
    }) : (0, _v1.translate)({
      singular: "expires in {count} day",
      plural: "expires in {count} days",
      count: _v1,
      replacements: {
        count: String(_v1)
      },
      dictionary: {
        es: {
          singular: "expira en {count} día",
          plural: "expira en {count} días"
        },
        "de-DE": {
          singular: "läuft in {count} Tag ab",
          plural: "läuft in {count} Tagen ab"
        },
        "fr-FR": {
          singular: "expire dans {count} jour",
          plural: "expire dans {count} jours"
        },
        "ja-JP": {
          singular: "あと{count}日で期限切れです",
          plural: "あと{count}日で期限切れです"
        },
        "ko-KR": {
          singular: "{count}일 후 만료됩니다",
          plural: "{count}일 후 만료됩니다"
        },
        "pt-BR": {
          singular: "expira em {count} dia",
          plural: "expira em {count} dias"
        },
        "zh-CN": {
          singular: "{count} 天后到期",
          plural: "{count} 天后到期"
        }
      }
    });
  }, "getCopyLinkToastTitle", 0, function (_v0, _v1, _v2) {
    let _v3;
    return _v3 = "disable" === _v0 ? (0, _v1.translate)({
      singular: "The link you copied is set to Hide from Vimeo. Your recipient may need access.",
      dictionary: {
        es: {
          singular: "El enlace que copió está configurado como Oculto en Vimeo. Es posible que su destinatario necesite acceso."
        },
        "de-DE": {
          singular: "Der Link, den Sie kopiert haben, ist auf Vimeo ausgeblendet. Möglicherweise benötigt der Empfänger eine Zugriffsberechtigung."
        },
        "fr-FR": {
          singular: "Le lien que vous avez copié est paramétré sur Masquer sur Vimeo. Votre destinataire pourrait avoir besoin d'y accéder."
        },
        "ja-JP": {
          singular: "コピーしたリンクは「Vimeoで非表示にする」に設定されています。受信者はアクセス権が必要な場合があります。"
        },
        "ko-KR": {
          singular: "복사한 링크는 Vimeo에서 숨기기로 설정되어 있습니다. 수신자에게 액세스 권한이 필요할 수 있습니다."
        },
        "pt-BR": {
          singular: "O link que você copiou está definido como Oculto no Vimeo. A pessoa destinatária pode precisar de acesso."
        },
        "zh-CN": {
          singular: "您复制的链接已设置为对 Vimeo 隐藏。您的收件人可能需要访问权限。"
        }
      }
    }) : "nobody" === _v0 ? (0, _v1.translate)({
      singular: "The link you copied is Private. Your recipient may need access.",
      dictionary: {
        es: {
          singular: "El enlace que copió está configurado como Privado. Es posible que su destinatario necesite acceso."
        },
        "de-DE": {
          singular: "Der von Ihnen kopierte Link ist privat. Möglicherweise benötigt der Empfänger eine Zugriffsberechtigung."
        },
        "fr-FR": {
          singular: "Le lien que vous avez copié est Privé. Votre destinataire pourrait avoir besoin d'y accéder."
        },
        "ja-JP": {
          singular: "コピーしたリンクは非公開です。受信者はアクセス権が必要な場合があります。"
        },
        "ko-KR": {
          singular: "복사한 링크는 비공개 상태입니다. 수신자에게 액세스 권한이 필요할 수 있습니다."
        },
        "pt-BR": {
          singular: "O link que você copiou é privado. Seu destinatário pode precisar de acesso."
        },
        "zh-CN": {
          singular: "您复制的链接是私有的。您的收件人可能需要访问权限。"
        }
      }
    }) : _v1 ? (0, _v1.translate)({
      singular: "The link you copied is for unrated content. It will be unavailable in some regions.",
      dictionary: {
        es: {
          singular: "El enlace que copió es para contenido sin clasificar. No estará disponible en algunas regiones."
        },
        "de-DE": {
          singular: "Der Link, den Sie kopiert haben, ist für nicht bewertete Inhalte. Es wird in einigen Regionen nicht verfügbar sein."
        },
        "fr-FR": {
          singular: "Le lien que vous avez copié mène à du contenu non classé. Il ne sera pas disponible dans certaines régions."
        },
        "ja-JP": {
          singular: "コピーしたリンクはレーティングの無いコンテンツ用です。一部の地域ではご利用いただけません。"
        },
        "ko-KR": {
          singular: "복사한 링크는 등급이 지정되지 않은 콘텐츠입니다. 일부 지역에서는 이용할 수 없습니다."
        },
        "pt-BR": {
          singular: "O link que você copiou é para conteúdo sem classificação. Ele não estará disponível em algumas regiões."
        },
        "zh-CN": {
          singular: "您复制的链接是未评级内容的。在某些地区将不可用。"
        }
      }
    }) : (0, _v1.translate)({
      singular: "Link copied",
      dictionary: {
        es: {
          singular: "Vínculo copiado"
        },
        "de-DE": {
          singular: "Link kopiert"
        },
        "fr-FR": {
          singular: "Lien copié"
        },
        "ja-JP": {
          singular: "リンクがコピーされました"
        },
        "ko-KR": {
          singular: "링크가 복사됐습니다"
        },
        "pt-BR": {
          singular: "Link copiado"
        },
        "zh-CN": {
          singular: "链接已复制"
        }
      }
    }), _v2 && (_v3 = _v3(_v3, _v2)), _v3;
  }, "getRemainingDays", 0, _v2]);
}