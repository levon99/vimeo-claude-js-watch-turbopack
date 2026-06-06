{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["VideoEditableTitle", 0, function ({
    videoId: _v0,
    setCurrentTitle: _v1,
    setIsEditingContentTitle: _v2,
    ..._v3
  }) {
    let [_v4] = (0, _v3.usePatchVideo)(),
      _v5 = (0, _v5.useNotification)(),
      _v6 = (0, _v6.useUpdateContentTitleCache)();
    return (0, _v1.jsx)(_v2.EditableTitle, {
      onChange: _v0 => {
        _v1(_v0);
      },
      onCancel: () => {
        _v2(!1);
      },
      onSubmit: _v0 => {
        _v0 !== _v3.value && _v4({
          where: {
            videoId: _v0
          },
          select: ["name"],
          variables: {
            name: _v0
          }
        }).then(() => {
          _v6({
            entity: "video",
            uri: `/videos/${_v0}`,
            title: _v0
          }), _v5({
            content: (0, _v4.translate)({
              singular: "Video title updated",
              dictionary: {
                es: {
                  singular: "Título del vídeo actualizado"
                },
                "de-DE": {
                  singular: "Video-Titel aktualisiert"
                },
                "fr-FR": {
                  singular: "Titre de la vidéo mis à jour"
                },
                "ja-JP": {
                  singular: "動画のタイトルが更新されました"
                },
                "ko-KR": {
                  singular: "동영상 제목이 업데이트되었습니다"
                },
                "pt-BR": {
                  singular: "Título do vídeo atualizado"
                },
                "zh-CN": {
                  singular: "视频标题已更新"
                }
              }
            })
          });
        }), _v2(!1);
      },
      fontSize: "header-xs",
      fontWeight: "normal",
      maxLength: 128,
      ..._v3
    });
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["getPrivacyLabel", 0, (_v0, _v1, _v2) => {
    let _v3 = ("cold_storage" === _v0 || "purgatory" === _v0) && _v2 ? _v2 : _v0;
    if ("team" === _v3) return (0, _v8.getTeamPrivacyTranslation)(_v1?.teamName, _v1?.isWorkspace);
    let _v4 = _v7.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v3)?.title;
    return _v4 || ("purgatory" === _v3 || "cold_storage" === _v3 ? (0, _v4.translate)({
      singular: "Locked",
      dictionary: {
        es: {
          singular: "Bloqueado"
        },
        "de-DE": {
          singular: "Gesperrt"
        },
        "fr-FR": {
          singular: "Verrouillé"
        },
        "ja-JP": {
          singular: "ロック済み"
        },
        "ko-KR": {
          singular: "잠김"
        },
        "pt-BR": {
          singular: "Bloqueado"
        },
        "zh-CN": {
          singular: "已锁定"
        }
      }
    }) : _v3);
  }], 0);
}