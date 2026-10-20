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
  }]);
}