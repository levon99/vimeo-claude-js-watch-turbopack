{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    videoCount: _v0 => 0 === _v0 ? (0, _v1.translate)({
      singular: "No videos",
      dictionary: {
        es: {
          singular: "No hay videos"
        },
        "de-DE": {
          singular: "Keine Videos"
        },
        "fr-FR": {
          singular: "Pas de vidéos"
        },
        "ja-JP": {
          singular: "動画がありません"
        },
        "ko-KR": {
          singular: "동영상이 없습니다"
        },
        "pt-BR": {
          singular: "Não há vídeos"
        },
        "zh-CN": {
          singular: "没有视频"
        }
      }
    }) : (0, _v1.translate)({
      count: _v0,
      singular: "{COUNT} video",
      plural: "{COUNT} videos",
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        "de-DE": {
          singular: "{COUNT} Video",
          plural: "{COUNT} Videos"
        },
        "fr-FR": {
          singular: "{COUNT} vidéo",
          plural: "{COUNT} vidéos"
        },
        "ja-JP": {
          singular: "{COUNT} 件の動画",
          plural: "{COUNT}件の動画"
        },
        "ko-KR": {
          singular: "동영상 {COUNT}개",
          plural: "동영상 {COUNT}개"
        },
        "pt-BR": {
          singular: "{COUNT} vídeo",
          plural: "{COUNT} vídeos"
        },
        "zh-CN": {
          singular: "{COUNT} 个视频",
          plural: "{COUNT} 个视频"
        }
      }
    }),
    hideFromVimeoPrivacy: (0, _v1.translate)({
      singular: "Embed only",
      dictionary: {
        es: {
          singular: "Solo incrustado"
        },
        "de-DE": {
          singular: "Nur Einbetten"
        },
        "fr-FR": {
          singular: "Intégration uniquement"
        },
        "ja-JP": {
          singular: "埋め込みのみ"
        },
        "ko-KR": {
          singular: "임베드 전용"
        },
        "pt-BR": {
          singular: "Somente incorporado"
        },
        "zh-CN": {
          singular: "仅限嵌入"
        }
      }
    }),
    privatePrivacy: (0, _v1.translate)({
      singular: "Private",
      dictionary: {
        es: {
          singular: "Privado"
        },
        "de-DE": {
          singular: "Privat"
        },
        "fr-FR": {
          singular: "Privé"
        },
        "ja-JP": {
          singular: "プライベート"
        },
        "ko-KR": {
          singular: "비공개"
        },
        "pt-BR": {
          singular: "Privado"
        },
        "zh-CN": {
          singular: "私密"
        }
      }
    }),
    passwordPrivacy: (0, _v1.translate)({
      singular: "Password",
      dictionary: {
        es: {
          singular: "Contraseña"
        },
        "de-DE": {
          singular: "Kennwort"
        },
        "fr-FR": {
          singular: "Mot de passe "
        },
        "ja-JP": {
          singular: "パスワード"
        },
        "ko-KR": {
          singular: "비밀번호"
        },
        "pt-BR": {
          singular: "Senha"
        },
        "zh-CN": {
          singular: "密码"
        }
      }
    }),
    unlistedPrivacy: (0, _v1.translate)({
      singular: "Unlisted",
      dictionary: {
        es: {
          singular: "Sin listar"
        },
        "de-DE": {
          singular: "Nicht gelistet"
        },
        "fr-FR": {
          singular: "Non répertorié"
        },
        "ja-JP": {
          singular: "限定公開"
        },
        "ko-KR": {
          singular: "일부 공개"
        },
        "pt-BR": {
          singular: "Não listado"
        },
        "zh-CN": {
          singular: "未公开发布"
        }
      }
    }),
    publicPrivacy: (0, _v1.translate)({
      singular: "Public",
      dictionary: {
        es: {
          singular: "Público"
        },
        "de-DE": {
          singular: "Öffentlich"
        },
        "ja-JP": {
          singular: "一般公開"
        },
        "ko-KR": {
          singular: "공개"
        },
        "pt-BR": {
          singular: "Público"
        },
        "zh-CN": {
          singular: "公开"
        }
      }
    }),
    peopleIFollow: (0, _v1.translate)({
      singular: "People I follow",
      dictionary: {
        es: {
          singular: "Las personas que sigo"
        },
        "de-DE": {
          singular: "Leute, denen ich folge"
        },
        "fr-FR": {
          singular: "Les personnes que je suis"
        },
        "ja-JP": {
          singular: "自分がフォローしている人"
        },
        "ko-KR": {
          singular: "내가 팔로우하는 사람"
        },
        "pt-BR": {
          singular: "Pessoas que eu sigo"
        },
        "zh-CN": {
          singular: "我关注的人"
        }
      }
    }),
    vod: (0, _v1.translate)({
      singular: "VOD",
      dictionary: {
        "zh-CN": {
          singular: "视频点播"
        }
      }
    }),
    peopleIChoose: (0, _v1.translate)({
      singular: "People I choose",
      dictionary: {
        es: {
          singular: "Las personas que elijo"
        },
        "de-DE": {
          singular: "Von mir ausgewählte Leute"
        },
        "fr-FR": {
          singular: "Personnes de mon choix"
        },
        "ja-JP": {
          singular: "選択した人のみ"
        },
        "ko-KR": {
          singular: "내가 선택한 사람"
        },
        "pt-BR": {
          singular: "Pessoas que eu escolher"
        },
        "zh-CN": {
          singular: "我选择的人"
        }
      }
    }),
    lockedPrivacy: (0, _v1.translate)({
      singular: "Restricted",
      dictionary: {
        es: {
          singular: "Restringido"
        },
        "de-DE": {
          singular: "Eingeschränkt"
        },
        "fr-FR": {
          singular: "Restreint"
        },
        "ja-JP": {
          singular: "制限付き"
        },
        "ko-KR": {
          singular: "제한됨"
        },
        "pt-BR": {
          singular: "Restrito"
        },
        "zh-CN": {
          singular: "受限"
        }
      }
    })
  };
  _v0.s(["DEFAULT_FOLDER_API_FIELDS", 0, ["name", "privacy", "uri", "link", "metadata.connections.ancestorPath", "metadata.connections.parentFolder", "metadata.connections.videos.total", "metadata.connections.personalTeamFolderOwner", "metadata.interactions.addSubfolder.canAddSubfolders", "metadata.interactions.edit.uri", "metadata.interactions.editSettings.uri", "metadata.interactions.view.uri", "metadata.interactions.invite", "metadata.interactions.delete", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "metadata.interactions.canComment", "isPinned", "isPrivateToUser", "isSlackNotificationEnabled", "user.uri", "slackIncomingWebhooksId", "useParentSlackSettings", "settings", "shouldShowTeamLibraryNotification", "metadata.interactions.allowMultipleReviewLinks", "metadata.interactions.reviewRedirectLink", "reviewLinks.uri"], "DEFAULT_ITEM_API_FIELDS", 0, ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.countsTowardManagedStorage", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isCopyrightRestricted", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.hasMandatoryEmailCapture", "video.metadata.interactions.edit.uri", "video.metadata.interactions.canComment", "video.metadata.interactions.delete.uri", "video.metadata.interactions.legalHold.uri", "video.metadata.interactions.invite.uri", "video.metadata.connections.versions.currentUri", "video.modifiedTime", "video.name", "video.parentProject.isPrivateToUser", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewPage", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "liveEvent.eventType", "liveEvent.createdTime", "liveEvent.embed.html", "liveEvent.title", "liveEvent.link", "liveEvent.settingsLink", "liveEvent.viewLink", "liveEvent.nextOccurrenceTime", "liveEvent.uri", "liveEvent.pictures.uri", "liveEvent.pictures.sizes", "liveEvent.streamPrivacy", "liveEvent.hasRegistration", "liveEvent.status", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.metadata.interactions.delete", "liveEvent.metadata.interactions.edit", "liveEvent.user.uri", "folder.createdTime", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.privacy", "folder.isPrivateToUser", "folder.isSlackNotificationEnabled", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.metadata.connections.parentFolder.uri", "folder.metadata.connections.videos.uri", "folder.metadata.connections.teamMembers.uri", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.reviewLinks.uri", "folder.slackIncomingWebhooksId", "folder.useParentSlackSettings"], "ITEMS_PER_PAGE", 0, 25, "MAX_VISITS_TO_COUNT", 0, 5, "MVV_VISIT_LOCAL_STORAGE_KEY", 0, "mvv_visits", "SHARE_RESOURCE_MVV_HEADER_ENTRY_POINT", 0, "VL_mvv_header", "SURVEY_VISIT_THRESHOLD", 0, 5, "TEAM_LIBRARY_PATH", 0, "/library", "TRANSLATIONS", 0, _v2, "VIDEO_SIZE_DECIMAL_PLACES", 0, 1]);
}