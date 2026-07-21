{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => (0, _v6.translate)({
      singular: "Delete {NUM_ITEMS_DELETED} videos?",
      replacements: {
        NUM_ITEMS_DELETED: _v0
      },
      dictionary: {
        es: {
          singular: "¿Eliminar {NUM_ITEMS_DELETED} videos?"
        },
        "de-DE": {
          singular: "Möchten Sie {NUM_ITEMS_DELETED} Videos löschen?"
        },
        "fr-FR": {
          singular: "Supprimer {NUM_ITEMS_DELETED} vidéos ?"
        },
        "ja-JP": {
          singular: "動画を{NUM_ITEMS_DELETED}件削除しますか？"
        },
        "ko-KR": {
          singular: "{NUM_ITEMS_DELETED}개의 동영상을 삭제하시겠습니까?"
        },
        "pt-BR": {
          singular: "Excluir {NUM_ITEMS_DELETED} vídeos?"
        },
        "zh-CN": {
          singular: "删除 {NUM_ITEMS_DELETED} 个视频？"
        }
      }
    }),
    _v8 = {
      deleteHeaderText: (_v0, _v1) => _v0 ? (0, _v6.translate)({
        singular: "Delete {NUM_ITEMS_DELETED} events?",
        replacements: {
          NUM_ITEMS_DELETED: _v1
        },
        dictionary: {
          es: {
            singular: "¿Eliminar {NUM_ITEMS_DELETED} eventos?"
          },
          "de-DE": {
            singular: "Möchten Sie {NUM_ITEMS_DELETED} Ereignisse löschen?"
          },
          "fr-FR": {
            singular: "Supprimer {NUM_ITEMS_DELETED} événements ?"
          },
          "ja-JP": {
            singular: "イベントを{NUM_ITEMS_DELETED}件削除しますか？"
          },
          "ko-KR": {
            singular: "{NUM_ITEMS_DELETED}개의 이벤트를 삭제하시겠습니까?"
          },
          "pt-BR": {
            singular: "Excluir {NUM_ITEMS_DELETED} eventos?"
          },
          "zh-CN": {
            singular: "删除 {NUM_ITEMS_DELETED} 个活动？"
          }
        }
      }) : _v7(_v1),
      deleteBodyText: (_v0, _v1) => _v0 ? (0, _v6.translate)({
        singular: "Permanently delete this event and its associated data. This event won’t play anywhere it’s embedded.",
        plural: "Permanently delete these events and their associated data. These events won’t play anywhere they’re embedded.",
        count: _v1,
        dictionary: {
          es: {
            singular: "Elimina este evento y sus datos asociados de manera permanente. Este evento no se reproducirá en ningún lugar donde esté insertado."
          },
          "de-DE": {
            singular: "Das Video und die damit verbundenen Daten unwiderruflich löschen. Dieses Event kann überall dort, wo es eingebettet ist, nicht abgespielt werden."
          },
          "fr-FR": {
            singular: "Supprimez de manière permanente cet événement et les données associées. Cet événement ne pourra plus être visionné partout où il a été intégré."
          },
          "ja-JP": {
            singular: "この動画とそれに関連するデータを完全に削除します。埋め込まれているすべてのサイトで再生できなくなります。"
          },
          "ko-KR": {
            singular: "이 동영상과 관련 데이터를 영구적으로 삭제합니다. 이 동영상은 임베드된 모든 위치에서 더 이상 재생되지 않습니다."
          },
          "pt-BR": {
            singular: "Exclua este evento permanentemente e todos os dados associados a ele. Estes eventos não serão reproduzidos onde foram incorporados."
          },
          "zh-CN": {
            singular: "永久删除此活动及其关联数据。此活动不会在其嵌入的任何地方播放。"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Permanently delete this video and its associated data. This video won’t play anywhere it’s embedded.",
        plural: "Permanently delete these videos and their associated data. These videos won’t play anywhere they’re embedded.",
        count: _v1,
        dictionary: {
          es: {
            singular: "Elimina este video y sus datos asociados de manera permanente. Este video no se reproducirá en ningún lugar donde esté insertado.",
            plural: "Elimina estos videos y sus datos asociados de manera permanente. Estos videos no se reproducirán en ningún lugar donde estén insertados."
          },
          "de-DE": {
            singular: "Dieses Video und die damit verbundenen Daten unwiderruflich löschen. Dieses Video wird dann an Orten, wo es eingebettet ist, nicht mehr abspielbar sein.",
            plural: "Diese Videos und die damit verbundenen Daten unwiderruflich löschen. Diese Videos werden dann an Orten, wo Sie eingebettet sind, nicht mehr abspielbar sein."
          },
          "fr-FR": {
            singular: "Supprimer de manière permanente cette vidéo et les données associées. Cette vidéo ne pourra plus être lue partout où elle est intégrée.",
            plural: "Supprimer de manière permanente ces vidéos et les données associées. Ces vidéos ne pourront plus être lues partout où elles sont intégrées."
          },
          "ja-JP": {
            singular: "この動画とそれに関連するデータを完全に削除します。埋め込まれているすべてのサイトで再生できなくなります。",
            plural: "これらの動画とそれに関連するデータを完全に削除します。埋め込まれているすべてのサイトで再生できなくなります。"
          },
          "ko-KR": {
            singular: "이 동영상과 관련 데이터를 영구적으로 삭제합니다. 이 동영상은 임베드된 모든 위치에서 더 이상 재생되지 않습니다.",
            plural: "이 동영상과 관련 데이터를 영구적으로 삭제합니다. 이 동영상들은 임베드된 모든 위치에서 더 이상 재생되지 않습니다."
          },
          "pt-BR": {
            singular: "Excluir permanentemente este vídeo e os dados associados a ele. Este vídeo não será reproduzido em nenhum lugar que foi incorporado.",
            plural: "Exclua permanentemente estes vídeos e seus dados associados `a eles. Estes vídeos não poderão mais ser reproduzidos onde foram incorporados."
          },
          "zh-CN": {
            singular: "永久删除此视频及其相关数据。此视频不会在嵌入的任何位置播放。",
            plural: "永久删除这些视频及其相关数据。这些视频不会在其嵌入的任何地方播放。"
          }
        }
      }),
      legalHoldHeaderText: _v0 => (0, _v6.translate)({
        singular: "Unable to delete video",
        plural: "Unable to delete videos",
        count: _v0,
        dictionary: {
          es: {
            singular: "No se pudo eliminar el video",
            plural: "No pudimos eliminar videos"
          },
          "de-DE": {
            singular: "Video kann nicht gelöscht werden",
            plural: "Videos können nicht gelöscht werden"
          },
          "fr-FR": {
            singular: "Impossible de supprimer cette vidéo.",
            plural: "Impossible de supprimer les vidéos"
          },
          "ja-JP": {
            singular: "動画を削除できませんでした",
            plural: "動画を削除できませんでした"
          },
          "ko-KR": {
            singular: "동영상 삭제 불가",
            plural: "동영상 삭제 불가"
          },
          "pt-BR": {
            singular: "Não foi possível excluir o vídeo",
            plural: "Não foi possível excluir os vídeos"
          },
          "zh-CN": {
            singular: "无法删除视频",
            plural: "无法删除视频"
          }
        }
      }),
      legalHoldBodyText: _v0 => (0, _v6.translate)({
        singular: "This video cannot be deleted. Contact an admin for details.",
        plural: "One or more of the selected videos cannot be deleted. Contact an admin for details.",
        count: _v0,
        dictionary: {
          es: {
            singular: "Este video no se puede eliminar. Ponte en contacto con un administrador para obtener más información.",
            plural: "No se pueden eliminar uno o más de los videos seleccionados. Ponte en contacto con un administrador para obtener más información."
          },
          "de-DE": {
            singular: "Dieses Video kann nicht gelöscht werden. Kontaktieren Sie einen Admin für weitere Informationen.",
            plural: "Ein oder mehrere der ausgewählten Videos können derzeit nicht gelöscht werden. Kontaktieren Sie einen Admin für weitere Informationen."
          },
          "fr-FR": {
            singular: "Cette vidéo ne peut pas être supprimée. Contactez un administrateur pour plus de détails.",
            plural: "Une ou plusieurs vidéos sélectionnées ne peuvent pas être supprimées. Contactez un administrateur pour plus de détails."
          },
          "ja-JP": {
            singular: "この動画は削除できません。詳細については、管理者にお問い合わせください。",
            plural: "選択した1つ以上の動画を削除できません。詳細については、管理者にお問い合わせください。"
          },
          "ko-KR": {
            singular: "이 동영상을 삭제할 수 없습니다. 자세한 내용은 관리자에게 문의하세요.",
            plural: "선택한 동영상 중 하나 이상을 삭제할 수 없습니다. 자세한 내용은 관리자에게 문의하세요."
          },
          "pt-BR": {
            singular: "O vídeo não pode ser apagado. Peça os detalhes ao administrador.",
            plural: "Um ou mais vídeos selecionados não podem ser apagados no momento. Peça os detalhes ao administrador."
          },
          "zh-CN": {
            singular: "此视频无法删除。联系管理员了解详情。",
            plural: "目前无法删除一个或多个选定的视频。联系管理员了解详情。"
          }
        }
      }),
      deleteVideosHeaderText: _v7,
      sendToRecentlyDeletedHeaderText: _v0 => (0, _v6.translate)({
        singular: "Move to Recently deleted?",
        plural: "Move {NUM_ITEMS_DELETED} videos to Recently deleted?",
        replacements: {
          NUM_ITEMS_DELETED: _v0
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "¿Mover a Eliminados recientemente?",
            plural: "¿Mover {NUM_ITEMS_DELETED} vídeos a Eliminados recientemente?"
          },
          "de-DE": {
            singular: "In „Kürzlich gelöscht“ verschieben?",
            plural: "{NUM_ITEMS_DELETED} Videos in „Kürzlich gelöscht“ verschieben?"
          },
          "fr-FR": {
            singular: "Déplacer vers Supprimés récemment ?",
            plural: "Déplacer {NUM_ITEMS_DELETED} vidéos vers Supprimés récemment ?"
          },
          "ja-JP": {
            singular: "この動画を「最近削除した項目」に移動しますか？",
            plural: "{NUM_ITEMS_DELETED}本の動画を「最近削除した項目」に移動しますか？"
          },
          "ko-KR": {
            singular: "최근 삭제됨으로 이동하시겠습니까?",
            plural: "{NUM_ITEMS_DELETED}개의 동영상을 최근 삭제됨으로 이동하시겠습니까?"
          },
          "pt-BR": {
            singular: "Mover para Excluídos recentemente?",
            plural: "Mover {NUM_ITEMS_DELETED} vídeos para Excluídos recentemente?"
          },
          "zh-CN": {
            singular: "移动到最近删除?",
            plural: "将 {NUM_ITEMS_DELETED} 个视频移动到最近删除?"
          }
        }
      }),
      sendToRecentlyDeletedBodyText: (_v0, _v1) => _v1 && 1 === _v0 ? (0, _v6.translate)({
        singular: '"{NAME}" will be deleted forever after 30 days. It won’t play anywhere it’s embedded.',
        replacements: {
          NAME: _v1
        },
        dictionary: {
          es: {
            singular: '"{NAME}" se eliminará de forma permanente después de 30 días. No se reproducirá en ningún lugar donde esté incrustado.'
          },
          "de-DE": {
            singular: '"{NAME}" wird nach 30 Tagen dauerhaft gelöscht. Es wird an keiner Stelle abgespielt, an der es eingebettet ist.'
          },
          "fr-FR": {
            singular: '"{NAME}" sera supprimé définitivement après 30 jours. Il ne pourra plus être lu nulle part où il est intégré.'
          },
          "ja-JP": {
            singular: '"{NAME}"は30日後に完全に削除されます。埋め込まれている場所では再生されなくなります。'
          },
          "ko-KR": {
            singular: '"{NAME}"은 30일 후 영구 삭제됩니다. 임베드된 곳 어디에서도 재생되지 않습니다.'
          },
          "pt-BR": {
            singular: '"{NAME}" será excluído permanentemente após 30 dias. Não será reproduzido em nenhum lugar onde estiver incorporado.'
          },
          "zh-CN": {
            singular: '"{NAME}"将在30天后被永久删除。它将无法在任何嵌入位置播放。'
          }
        }
      }) : (0, _v6.translate)({
        singular: "This video will be deleted forever after 30 days. It won’t play anywhere it’s embedded.",
        plural: "These videos will be deleted forever after 30 days. They won’t play anywhere they’re embedded.",
        count: _v0,
        dictionary: {
          es: {
            singular: "Este vídeo se eliminará de forma permanente después de 30 días. No se reproducirá en ningún lugar donde esté incrustado.",
            plural: "Estos vídeos se eliminarán de forma permanente después de 30 días. No se reproducirán en ningún lugar donde estén incrustados."
          },
          "de-DE": {
            singular: "Dieses Video wird nach 30 Tagen dauerhaft gelöscht. Es wird an keiner Stelle abgespielt, an der es eingebettet ist.",
            plural: "Diese Videos werden nach 30 Tagen dauerhaft gelöscht. Sie werden an keiner Stelle abgespielt, an der sie eingebettet sind."
          },
          "fr-FR": {
            singular: "Cette vidéo sera supprimée définitivement après 30 jours. Elle ne pourra plus être lue nulle part où elle est intégrée.",
            plural: "Ces vidéos seront supprimées définitivement après 30 jours. Elles ne pourront plus être lues nulle part où elles sont intégrées."
          },
          "ja-JP": {
            singular: "この動画は30日後に完全に削除されます。埋め込まれている場所では再生されなくなります。",
            plural: "これらの動画は30日後に完全に削除されます。埋め込まれている場所では再生されなくなります。"
          },
          "ko-KR": {
            singular: "이 비디오는 30일 후 영구 삭제됩니다. 임베드된 곳 어디에서도 재생되지 않습니다.",
            plural: "이 비디오들은 30일 후 영구 삭제됩니다. 임베드된 곳 어디에서도 재생되지 않습니다."
          },
          "pt-BR": {
            singular: "Este vídeo será excluído permanentemente após 30 dias. Não será reproduzido em nenhum lugar onde estiver incorporado.",
            plural: "Estes vídeos serão excluídos permanentemente após 30 dias. Não serão reproduzidos em nenhum lugar onde estiverem incorporados."
          },
          "zh-CN": {
            singular: "该视频将在30天后被永久删除。它将无法在任何嵌入位置播放。",
            plural: "这些视频将在30天后被永久删除。它们将无法在任何嵌入位置播放。"
          }
        }
      }),
      coldStorageHeaderText: _v0 => (0, _v6.translate)({
        singular: "Permanently delete 1 video?",
        plural: "Permanently delete {NUM_ITEMS_DELETED} videos?",
        replacements: {
          NUM_ITEMS_DELETED: _v0
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "¿Eliminar permanentemente 1 video?",
            plural: "¿Eliminar permanentemente {NUM_ITEMS_DELETED} videos?"
          },
          "de-DE": {
            singular: "1 Video dauerhaft löschen?",
            plural: "{NUM_ITEMS_DELETED} Videos dauerhaft löschen?"
          },
          "fr-FR": {
            singular: "Supprimer définitivement 1 vidéo\x0202F?",
            plural: "Supprimer définitivement {NUM_ITEMS_DELETED} vidéos\x0202F?"
          },
          "ja-JP": {
            singular: "1件のビデオを永久に削除しますか？",
            plural: "{NUM_ITEMS_DELETED}件のビデオを永久に削除しますか？"
          },
          "ko-KR": {
            singular: "1개의 비디오를 영구적으로 삭제하시겠습니까?",
            plural: "{NUM_ITEMS_DELETED}개의 비디오를 영구적으로 삭제하시겠습니까?"
          },
          "pt-BR": {
            singular: "Excluir permanentemente 1 vídeo?",
            plural: "Excluir permanentemente {NUM_ITEMS_DELETED} vídeos?"
          },
          "zh-CN": {
            singular: "永久删除 1 个视频？",
            plural: "永久删除 {NUM_ITEMS_DELETED} 个视频？"
          }
        }
      }),
      coldStorageSingleBodyText: _v0 => (0, _v6.translate)({
        singular: '"{NAME}" is locked and will be permanently deleted.',
        replacements: {
          NAME: _v0
        },
        dictionary: {
          es: {
            singular: '"{NAME}" está bloqueado y será eliminado permanentemente.'
          },
          "de-DE": {
            singular: '"{NAME}" ist gesperrt und wird dauerhaft gelöscht.'
          },
          "fr-FR": {
            singular: '"{NAME}" est verrouillé et sera supprimé définitivement.'
          },
          "ja-JP": {
            singular: '"{NAME}"はロックされ、永久に削除されます。'
          },
          "ko-KR": {
            singular: '"{NAME}"이(가) 잠겨 영구적으로 삭제됩니다.'
          },
          "pt-BR": {
            singular: '"{NAME}" está bloqueado e será excluído permanentemente.'
          },
          "zh-CN": {
            singular: '"{NAME}" 已锁定并将被永久删除。'
          }
        }
      }),
      coldStorageBulkBodyText: _v0 => (0, _v6.translate)({
        singular: "1 video is locked and will be permanently deleted.",
        plural: "{NUM_ITEMS_DELETED} videos are locked and will be permanently deleted.",
        replacements: {
          NUM_ITEMS_DELETED: _v0
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "1 video está bloqueado y será eliminado permanentemente.",
            plural: "{NUM_ITEMS_DELETED} videos están bloqueados y serán eliminados permanentemente."
          },
          "de-DE": {
            singular: "1 Video ist gesperrt und wird dauerhaft gelöscht.",
            plural: "{NUM_ITEMS_DELETED} Videos sind gesperrt und werden dauerhaft gelöscht."
          },
          "fr-FR": {
            singular: "1 vidéo est verrouillée et sera définitivement supprimée.",
            plural: "{NUM_ITEMS_DELETED} vidéos sont verrouillées et seront définitivement supprimées."
          },
          "ja-JP": {
            singular: "1件のビデオがロックされ、永久に削除されます。",
            plural: "{NUM_ITEMS_DELETED}件のビデオがロックされ、永久に削除されます。"
          },
          "ko-KR": {
            singular: "1개의 비디오가 잠겨 영구적으로 삭제됩니다.",
            plural: "{NUM_ITEMS_DELETED}개의 비디오가 잠겨 영구적으로 삭제됩니다."
          },
          "pt-BR": {
            singular: "1 vídeo está bloqueado e será excluído permanentemente.",
            plural: "{NUM_ITEMS_DELETED} vídeos estão bloqueados e serão excluídos permanentemente."
          },
          "zh-CN": {
            singular: "1 个视频已被锁定并将被永久删除。",
            plural: "{NUM_ITEMS_DELETED} 个视频已被锁定并将被永久删除。"
          }
        }
      }),
      mixedBulkBodyText: (_v0, _v1) => 1 === _v0 && _v1 ? (0, _v6.translate)({
        singular: '"{NAME}" will be sent to Recently deleted and will be deleted forever after 30 days. It won’t play anywhere it’s embedded.',
        replacements: {
          NAME: _v1
        },
        dictionary: {
          es: {
            singular: '"{NAME}" será enviado a Eliminados recientemente y será eliminado para siempre después de 30 días. No se reproducirá en ningún lugar donde esté insertado.'
          },
          "de-DE": {
            singular: "\"{NAME}\" wird in 'Zuletzt gelöscht' verschoben und nach 30 Tagen endgültig gelöscht. Es wird an keiner Stelle abgespielt, an der es eingebettet ist."
          },
          "fr-FR": {
            singular: '"{NAME}" sera déplacé vers Récemment supprimés et sera supprimé définitivement après 30 jours. Il ne sera lisible nulle part où il est intégré.'
          },
          "ja-JP": {
            singular: '"{NAME}"は「最近削除した項目」に移動され、30日後に完全に削除されます。埋め込み先では再生されなくなります。'
          },
          "ko-KR": {
            singular: '"{NAME}"이(가) Recently deleted로 이동되며 30일 후 영구적으로 삭제됩니다. 임베드된 곳 어디에서도 재생되지 않습니다.'
          },
          "pt-BR": {
            singular: '"{NAME}" será enviado para Recently deleted e será excluído definitivamente após 30 dias. Ele não será reproduzido em nenhum lugar onde esteja incorporado.'
          },
          "zh-CN": {
            singular: '"{NAME}" 将被移至最近删除，并在 30 天后被永久删除。它在任何嵌入位置都将无法播放。'
          }
        }
      }) : (0, _v6.translate)({
        singular: "1 video will be sent to Recently deleted and will be deleted forever after 30 days. It won’t play anywhere it’s embedded.",
        plural: "{NUM_ITEMS_DELETED} videos will be sent to Recently deleted and will be deleted forever after 30 days. They won’t play anywhere they’re embedded.",
        replacements: {
          NUM_ITEMS_DELETED: _v0
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "1 video será enviado a Eliminados recientemente y será eliminado para siempre después de 30 días. No se reproducirá en ningún lugar donde esté insertado.",
            plural: "{NUM_ITEMS_DELETED} videos serán enviados a Eliminados recientemente y serán eliminados para siempre después de 30 días. No se reproducirán en ningún lugar donde estén insertados."
          },
          "de-DE": {
            singular: "1 Video wird in 'Zuletzt gelöscht' verschoben und nach 30 Tagen endgültig gelöscht. Es wird an keiner Stelle abgespielt, an der es eingebettet ist.",
            plural: "{NUM_ITEMS_DELETED} Videos werden in 'Zuletzt gelöscht' verschoben und nach 30 Tagen endgültig gelöscht. Sie werden an keiner Stelle abgespielt, an der sie eingebettet sind."
          },
          "fr-FR": {
            singular: "1 vidéo sera déplacée vers Récemment supprimés et sera supprimée définitivement après 30 jours. Elle ne sera lisible nulle part où elle est intégrée.",
            plural: "{NUM_ITEMS_DELETED} vidéos seront déplacées vers Récemment supprimés et seront supprimées définitivement après 30 jours. Elles ne seront lisibles nulle part où elles sont intégrées."
          },
          "ja-JP": {
            singular: "1件のビデオは「最近削除した項目」に移動され、30日後に完全に削除されます。埋め込み先では再生されなくなります。",
            plural: "{NUM_ITEMS_DELETED}件のビデオは「最近削除した項目」に移動され、30日後に完全に削除されます。埋め込み先では再生されなくなります。"
          },
          "ko-KR": {
            singular: "1개의 비디오가 Recently deleted로 이동되며 30일 후 영구적으로 삭제됩니다. 임베드된 곳 어디에서도 재생되지 않습니다.",
            plural: "{NUM_ITEMS_DELETED}개의 비디오가 Recently deleted로 이동되며 30일 후 영구적으로 삭제됩니다. 임베드된 곳 어디에서도 재생되지 않습니다."
          },
          "pt-BR": {
            singular: "1 vídeo será enviado para Recently deleted e será excluído definitivamente após 30 dias. Ele não será reproduzido em nenhum lugar onde esteja incorporado.",
            plural: "{NUM_ITEMS_DELETED} vídeos serão enviados para Recently deleted e serão excluídos definitivamente após 30 dias. Eles não serão reproduzidos em nenhum lugar onde estejam incorporados."
          },
          "zh-CN": {
            singular: "1 个视频将被移至最近删除，并在 30 天后被永久删除。它在任何嵌入位置都将无法播放。",
            plural: "{NUM_ITEMS_DELETED} 个视频将被移至最近删除，并在 30 天后被永久删除。它们在任何嵌入位置都将无法播放。"
          }
        }
      }),
      cannotBeUndoneText: () => (0, _v6.translate)({
        singular: "This action cannot be undone.",
        dictionary: {
          es: {
            singular: "Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "Cette action est irréversible."
          },
          "ja-JP": {
            singular: "この操作は取り消せません。"
          },
          "ko-KR": {
            singular: "이 작업은 취소할 수 없습니다."
          },
          "pt-BR": {
            singular: "Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "此操作无法撤销。"
          }
        }
      }),
      mixedWarningText: (_v0, _v1 = "") => "" != _v1 ? (0, _v6.translate)({
        singular: "{NAME} is locked and will be permanently deleted. This action cannot be undone.",
        plural: "{NUM_ITEMS_DELETED} videos are locked and will be permanently deleted. This action cannot be undone.",
        replacements: {
          NAME: _v1,
          NUM_ITEMS_DELETED: _v0
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "{NAME} está bloqueado y será eliminado permanentemente. Esta acción no se puede deshacer.",
            plural: "{NUM_ITEMS_DELETED} videos están bloqueados y serán eliminados permanentemente. Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "{NAME} ist gesperrt und wird dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.",
            plural: "{NUM_ITEMS_DELETED} Videos sind gesperrt und werden dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "{NAME} est verrouillé et sera définitivement supprimé. Cette action est irréversible.",
            plural: "{NUM_ITEMS_DELETED} vidéos sont verrouillées et seront définitivement supprimées. Cette action est irréversible."
          },
          "ja-JP": {
            singular: "{NAME}はロックされており、永久に削除されます。この操作は取り消せません。",
            plural: "{NUM_ITEMS_DELETED}本の動画がロックされており、永久に削除されます。この操作は取り消せません。"
          },
          "ko-KR": {
            singular: "{NAME}이(가) 잠겨 있으며 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.",
            plural: "{NUM_ITEMS_DELETED}개의 동영상이 잠겨 있으며 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다."
          },
          "pt-BR": {
            singular: "{NAME} está bloqueado e será excluído permanentemente. Esta ação não pode ser desfeita.",
            plural: "{NUM_ITEMS_DELETED} vídeos estão bloqueados e serão excluídos permanentemente. Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "{NAME} 已被锁定并将被永久删除。此操作无法撤销。",
            plural: "{NUM_ITEMS_DELETED} 个视频被锁定，将被永久删除。此操作无法撤销。"
          }
        }
      }) : (0, _v6.translate)({
        singular: "1 video is locked and will be permanently deleted. This action cannot be undone.",
        plural: "{NUM_ITEMS_DELETED} videos are locked and will be permanently deleted. This action cannot be undone.",
        replacements: {
          NUM_ITEMS_DELETED: _v0
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "1 video está bloqueado y será eliminado permanentemente. Esta acción no se puede deshacer.",
            plural: "{NUM_ITEMS_DELETED} videos están bloqueados y serán eliminados permanentemente. Esta acción no se puede deshacer."
          },
          "de-DE": {
            singular: "1 Video ist gesperrt und wird dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.",
            plural: "{NUM_ITEMS_DELETED} Videos sind gesperrt und werden dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "1 vidéo est verrouillée et sera définitivement supprimée. Cette action est irréversible.",
            plural: "{NUM_ITEMS_DELETED} vidéos sont verrouillées et seront définitivement supprimées. Cette action est irréversible."
          },
          "ja-JP": {
            singular: "1本の動画がロックされており、永久に削除されます。この操作は取り消せません。",
            plural: "{NUM_ITEMS_DELETED}本の動画がロックされており、永久に削除されます。この操作は取り消せません。"
          },
          "ko-KR": {
            singular: "1개의 동영상이 잠겨 있으며 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.",
            plural: "{NUM_ITEMS_DELETED}개의 동영상이 잠겨 있으며 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다."
          },
          "pt-BR": {
            singular: "1 vídeo está bloqueado e será excluído permanentemente. Esta ação não pode ser desfeita.",
            plural: "{NUM_ITEMS_DELETED} vídeos estão bloqueados e serão excluídos permanentemente. Esta ação não pode ser desfeita."
          },
          "zh-CN": {
            singular: "1 个视频被锁定，将被永久删除。此操作无法撤销。",
            plural: "{NUM_ITEMS_DELETED} 个视频被锁定，将被永久删除。此操作无法撤销。"
          }
        }
      })
    };
  _v0.s(["T", 0, _v8], 0);
  let _v9 = ({
    children: _v0
  }) => (0, _v1.jsxs)(_v4.AlertRoot, {
    size: "sm",
    backgroundColor: "status-destructive-secondary",
    borderRadius: "md",
    marginTop: "sm",
    display: "flex",
    alignItems: "center",
    gap: "sm",
    children: [(0, _v1.jsx)(_v3.AlertIcon, {
      color: "status-destructive-primary",
      children: (0, _v1.jsx)(_v5.InfoCircle, {})
    }), (0, _v1.jsx)(_v2.AlertDescription, {
      fontSize: "body-sm",
      children: _v0
    })]
  });
  _v0.s(["ColdStorageBulkWarning", 0, ({
    numColdStorageItems: _v0,
    name: _v1 = ""
  }) => (0, _v1.jsx)(_v9, {
    children: _v8.mixedWarningText(_v0, _v1)
  }), "ColdStorageWarning", 0, _v9], 0);
}