{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "duplicate_clip",
    _v3 = new Set(["clip_view_permission_denied", "clip_disallows_adds", "embed_only_clip_requires_owner", "unlisted_clip_requires_owner", "album_add_clip_permission_denied", "unlisted_clip_permission_denied", "user_cannot_interact", "user_cannot_add_videos"]);
  _v0.s(["DUPLICATE_CLIP_REASON", 0, _v2, "extractFailedAdds", 0, _v0 => {
    if (null === _v0 || "object" != typeof _v0) return [];
    let _v1 = _v0.failedAdds;
    return Array.isArray(_v1) ? _v1.filter(_v0 => null !== _v0 && "object" == typeof _v0 && "uri" in _v0) : [];
  }, "getDuplicateShowcaseCopy", 0, _v0 => 1 === _v0 ? (0, _v1.translate)({
    singular: "This video is already in this showcase.",
    dictionary: {
      es: {
        singular: "Este video ya está en este showcase."
      },
      "de-DE": {
        singular: "Dieses Video ist bereits in diesem Showcase."
      },
      "fr-FR": {
        singular: "Cette vidéo est déjà dans ce showcase."
      },
      "ja-JP": {
        singular: "このビデオはすでにこのショーケースにあります。"
      },
      "ko-KR": {
        singular: "이 비디오는 이미 이 쇼케이스에 있습니다."
      },
      "pt-BR": {
        singular: "Este vídeo já está neste showcase."
      },
      "zh-CN": {
        singular: "该视频已在此展示集中。"
      }
    }
  }) : (0, _v1.translate)({
    singular: "Some of the selected videos are already in this showcase.",
    dictionary: {
      es: {
        singular: "Algunos de los videos seleccionados ya están en este showcase."
      },
      "de-DE": {
        singular: "Einige der ausgewählten Videos sind bereits in diesem Showcase."
      },
      "fr-FR": {
        singular: "Certaines vidéos sélectionnées sont déjà dans cette showcase."
      },
      "ja-JP": {
        singular: "選択した動画の一部は既にこのショーケースにあります。"
      },
      "ko-KR": {
        singular: "선택한 동영상 중 일부는 이미 이 쇼케이스에 있습니다."
      },
      "pt-BR": {
        singular: "Alguns dos vídeos selecionados já estão nesta showcase."
      },
      "zh-CN": {
        singular: "部分所选视频已存在于此展示中。"
      }
    }
  }), "getShowcaseFailureReasonCopy", 0, _v0 => _v0 === _v2 ? (0, _v1.translate)({
    singular: "This video is already in this showcase.",
    dictionary: {
      es: {
        singular: "Este video ya está en este showcase."
      },
      "de-DE": {
        singular: "Dieses Video ist bereits in diesem Showcase."
      },
      "fr-FR": {
        singular: "Cette vidéo est déjà dans ce showcase."
      },
      "ja-JP": {
        singular: "このビデオはすでにこのショーケースにあります。"
      },
      "ko-KR": {
        singular: "이 비디오는 이미 이 쇼케이스에 있습니다."
      },
      "pt-BR": {
        singular: "Este vídeo já está neste showcase."
      },
      "zh-CN": {
        singular: "该视频已在此展示集中。"
      }
    }
  }) : "clip_blocked" === _v0 ? (0, _v1.translate)({
    singular: "This video contains Vimeo Create assets that are no longer available on your current plan. Upgrade your plan to add it to a showcase.",
    dictionary: {
      es: {
        singular: "Este video contiene recursos de Vimeo Create que ya no están disponibles en tu plan actual. Actualiza tu plan para agregarlo a un showcase."
      },
      "de-DE": {
        singular: "Dieses Video enthält Vimeo Create-Assets, die in Ihrem aktuellen Plan nicht mehr verfügbar sind. Upgraden Sie Ihren Plan, um es einem Showcase hinzuzufügen."
      },
      "fr-FR": {
        singular: "Cette vidéo contient des assets Vimeo Create qui ne sont plus disponibles dans votre forfait actuel. Passez à un forfait supérieur pour l'ajouter à un showcase."
      },
      "ja-JP": {
        singular: "このビデオには、現在のプランでは利用できなくなった Vimeo Create assets が含まれています。ショーケースに追加するにはプランをアップグレードしてください。"
      },
      "ko-KR": {
        singular: "이 비디오는 현재 요금제에서 더 이상 사용할 수 없는 Vimeo Create 자산을 포함하고 있습니다. 이 비디오를 쇼케이스에 추가하려면 요금제를 업그레이드하세요."
      },
      "pt-BR": {
        singular: "Este vídeo contém ativos do Vimeo Create que não estão mais disponíveis no seu plano atual. Atualize seu plano para adicioná‑lo a um showcase."
      },
      "zh-CN": {
        singular: "此视频包含您当前计划中已不再可用的 Vimeo Create 资源。升级您的计划以将其添加到展示集中。"
      }
    }
  }) : _v3.has(_v0) ? (0, _v1.translate)({
    singular: "You don't have permission to add this video to this showcase.",
    dictionary: {
      es: {
        singular: "No tienes permiso para agregar este video a este showcase."
      },
      "de-DE": {
        singular: "Sie haben keine Berechtigung, dieses Video zu diesem Showcase hinzuzufügen."
      },
      "fr-FR": {
        singular: "Vous n'êtes pas autorisé à ajouter cette vidéo à ce showcase."
      },
      "ja-JP": {
        singular: "このビデオをこのショーケースに追加する権限がありません。"
      },
      "ko-KR": {
        singular: "이 비디오를 이 쇼케이스에 추가할 권한이 없습니다."
      },
      "pt-BR": {
        singular: "Você não tem permissão para adicionar este vídeo a este showcase."
      },
      "zh-CN": {
        singular: "您没有权限将此视频添加到此展示集中。"
      }
    }
  }) : void 0]);
}